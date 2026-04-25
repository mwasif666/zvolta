const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const glob = require("glob");
const HTMLtoJSX = require("htmltojsx");
const prettier = require("prettier");

const rootDir = process.cwd();
const generatedPagesDir = path.join(rootDir, "src", "generated", "pages");
const stagingHtmlDir = path.join(rootDir, "Zvolta-website-staging");

function resolveSourceHtmlDir() {
  if (fs.existsSync(stagingHtmlDir)) {
    return stagingHtmlDir;
  }

  const legacyHtmlDir = path.join(rootDir, "html");
  if (fs.existsSync(legacyHtmlDir)) {
    return legacyHtmlDir;
  }

  return rootDir;
}

const sourceHtmlDir = resolveSourceHtmlDir();
const sourceUsesExternalDir = sourceHtmlDir !== rootDir;

function getTrackedHtmlFiles() {
  try {
    return execFileSync("git", ["ls-files", "*.html"], {
      cwd: rootDir,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    })
      .split(/\r?\n/)
      .map((value) => value.trim())
      .filter(Boolean);
  } catch {
    return [];
  }
}

const htmlFiles = Array.from(
  new Set(
    sourceUsesExternalDir
      ? glob.sync("*.html", { cwd: sourceHtmlDir, nodir: true })
      : [
          ...glob.sync("*.html", { cwd: sourceHtmlDir, nodir: true }),
          ...getTrackedHtmlFiles(),
        ],
  ),
).sort((a, b) => a.localeCompare(b));

const converter = new HTMLtoJSX({ createClass: false });

const specialComponentNames = {
  "404.html": "NotFoundPage",
  "Loader.html": "LoaderPage",
  "Policy.html": "PolicyPage",
};

const sharedCleanupPatterns = [
  /<script\b[^>]*src=["']https:\/\/cdn\.tailwindcss\.com["'][^>]*>\s*<\/script>/gi,
  /<script\b[^>]*>\s*tailwind\.config\s*=\s*\{[\s\S]*?<\/script>/gi,
];

function pascalCase(value) {
  return value
    .replace(/(^[0-9]+)/, "")
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join("");
}

function componentNameFromFile(fileName) {
  if (specialComponentNames[fileName]) {
    return specialComponentNames[fileName];
  }

  const baseName = path.basename(fileName, ".html");
  const safeName = pascalCase(baseName || "page");
  return `${safeName}Page`;
}

function getRoutePaths(pageId) {
  const baseName = path.basename(pageId, ".html");
  const normalizedBase = baseName.toLowerCase();

  if (normalizedBase === "index") {
    return ["/", "/index.html"];
  }

  if (normalizedBase === "404") {
    return ["/404", "/404.html"];
  }

  const canonicalHtmlPath = `/${pageId}`;
  const extensionlessPath = `/${normalizedBase}`;

  if (canonicalHtmlPath.toLowerCase() === `${extensionlessPath}.html`) {
    return [extensionlessPath, canonicalHtmlPath];
  }

  return [extensionlessPath, canonicalHtmlPath];
}

function getCanonicalPath(pageId) {
  return getRoutePaths(pageId)[0];
}

function resolveInternalHref(href) {
  if (!href || /^(#|mailto:|tel:|javascript:)/i.test(href)) {
    return href;
  }

  const [rawPath, hash = ""] = href.split("#");

  if (!/\.html$/i.test(rawPath)) {
    return href;
  }

  const normalizedPageId = rawPath.replace(/^\.\//, "").replace(/^\//, "");
  const canonicalPath = getCanonicalPath(normalizedPageId);

  if (!canonicalPath) {
    return href;
  }

  return hash ? `${canonicalPath}#${hash}` : canonicalPath;
}

function rewriteInternalAnchors(html) {
  return html.replace(
    /(href=)(["'])([^"']+)\2/gi,
    (_match, prefix, quote, href) => {
      const nextHref = resolveInternalHref(href);
      return `${prefix}${quote}${nextHref}${quote}`;
    },
  );
}

function normalizeDynamicNavClasses(html) {
  return html.replace(
    /(<(?:a|button)\b[^>]*\bid=(["'])(dynamic-logo|dynamic-sidebar-btn)\2[^>]*\bclass=(["']))([^"']*)(\4)/gi,
    (_match, prefix, _idQuote, _elementId, _classQuote, classValue, suffix) => {
      const nextClassValue = classValue
        .replace(/\bopacity-0\b/g, "")
        .replace(/\bpointer-events-none\b/g, "")
        .replace(/\s+/g, " ")
        .trim();

      return `${prefix}${nextClassValue}${suffix}`;
    },
  );
}

function sanitizeInlineEvents(html) {
  return html.replace(
    /\s(on[a-z]+)=(["'])([\s\S]*?)\2/gi,
    (_match, eventName, quote, handler) => {
      return ` data-inline-${eventName.toLowerCase()}=${quote}${handler}${quote}`;
    },
  );
}

function camelToKebab(value) {
  return value.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}

function normalizeJsxString(jsx) {
  return jsx.replace(/style=\{\{([\s\S]*?)\}\}/g, (_match, styleContent) => {
    const normalizedStyles = styleContent.replace(
      /(^|[,{]\s*)(-([A-Za-z][A-Za-z0-9]*))\s*:/g,
      (_token, prefix, _rawKey, keyBody) => {
        return `${prefix}'--${camelToKebab(keyBody)}':`;
      },
    );

    return `style={{${normalizedStyles}}}`;
  });
}

function replaceAnchorsWithSmartLink(jsx) {
  return jsx
    .replace(/<a(\s|>)/g, "<SmartLink$1")
    .replace(/<\/a>/g, "</SmartLink>");
}

function escapeTemplateLiteralContent(value) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");
}

function getTitle(headContent) {
  return (headContent.match(/<title>([\s\S]*?)<\/title>/i) || [
    null,
    "",
  ])[1].trim();
}

function getDescription(headContent) {
  const match = headContent.match(
    /<meta[^>]+name=["']description["'][^>]+content=(["'])([\s\S]*?)\1[^>]*>/i,
  );

  return (match?.[2] || "").trim();
}

function cleanHead(headContent) {
  let cleaned = headContent;

  for (const pattern of sharedCleanupPatterns) {
    cleaned = cleaned.replace(pattern, "");
  }

  return cleaned.trim();
}

function extractStyleBlocks(headContent) {
  return Array.from(headContent.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi))
    .map((match) => match[1].trim())
    .filter(Boolean);
}

function addPageMarker(htmlAttributes, fileName) {
  if (/data-page=/i.test(htmlAttributes)) {
    return htmlAttributes;
  }

  return `${htmlAttributes} data-page="${fileName}"`;
}

function normalizeScriptPath(src) {
  if (!src) {
    return null;
  }

  if (/^https?:\/\//i.test(src) || /^\/\//.test(src)) {
    return null;
  }

  return src.startsWith("/") ? src : `/${src.replace(/^\.\//, "")}`;
}

async function formatWithPrettier(source, parser = "babel") {
  return prettier.format(source, {
    parser,
    singleQuote: true,
    trailingComma: "all",
  });
}

async function main() {
  const legacyScriptMap = {};
  const registryEntries = [];

  for (const htmlFile of htmlFiles) {
    const sourcePath = path.join(sourceHtmlDir, htmlFile);
    let html;

    if (sourceUsesExternalDir && fs.existsSync(sourcePath)) {
      html = fs.readFileSync(sourcePath, "utf8");
    } else {
      try {
        html = execFileSync("git", ["show", `HEAD:${htmlFile}`], {
          cwd: rootDir,
          encoding: "utf8",
          stdio: ["ignore", "pipe", "ignore"],
        });
      } catch {
        html = fs.readFileSync(sourcePath, "utf8");
      }
    }

    const doctypeMatch = html.match(/<!DOCTYPE[^>]*>/i);
    const htmlTagMatch = html.match(/<html([^>]*)>/i);
    const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
    const bodyMatch = html.match(/<body([^>]*)>([\s\S]*?)<\/body>/i);

    if (!htmlTagMatch || !headMatch || !bodyMatch) {
      throw new Error(`Unable to parse HTML structure for ${htmlFile}`);
    }

    const doctype = doctypeMatch ? `${doctypeMatch[0]}\n` : "<!DOCTYPE html>\n";
    const htmlAttributes = addPageMarker(htmlTagMatch[1] || "", htmlFile);
    const title = getTitle(headMatch[1]);
    const description = getDescription(headMatch[1]);
    const styleBlocks = extractStyleBlocks(cleanHead(headMatch[1]));
    const bodyAttributes = bodyMatch[1] || "";

    const componentName = componentNameFromFile(htmlFile);
    const pageId = htmlFile;

    let bodyContent = normalizeDynamicNavClasses(
      rewriteInternalAnchors(sanitizeInlineEvents(bodyMatch[2] || "")),
    );
    const externalScripts = [];
    const inlineScripts = [];

    bodyContent = bodyContent.replace(
      /<script\b([^>]*)>([\s\S]*?)<\/script>/gi,
      (_match, attrs, scriptBody) => {
        const srcMatch = attrs.match(/\ssrc=(["'])(.*?)\1/i);
        const typeMatch = attrs.match(/\stype=(["'])(.*?)\1/i);
        const scriptType = typeMatch?.[2]?.trim().toLowerCase();
        const trimmedBody = scriptBody.trim();

        if (srcMatch) {
          const normalizedSrc = normalizeScriptPath(srcMatch[2]);
          if (normalizedSrc) {
            externalScripts.push(normalizedSrc);
          }
          return "";
        }

        if (!trimmedBody) {
          return "";
        }

        if (scriptType === "application/ld+json") {
          return "";
        }

        if (/tailwind\.config\s*=/.test(trimmedBody)) {
          return "";
        }

        inlineScripts.push(trimmedBody);
        return "";
      },
    );

    const rawJsxBody = normalizeJsxString(converter.convert(bodyContent.trim()));
    const usesSmartLink = /<a(?:\s|>)/.test(rawJsxBody);
    const jsxBody = usesSmartLink
      ? replaceAnchorsWithSmartLink(rawJsxBody)
      : rawJsxBody;
    const componentImports = usesSmartLink
      ? [`import { SmartLink } from '../../components/SmartLink';`]
      : [];
    const styleMarkup = styleBlocks
      .map(
        (styleBlock, index) =>
          `    <style data-page-style="${pageId}:${index + 1}">{\`${escapeTemplateLiteralContent(styleBlock)}\`}</style>`,
      )
      .join("\n");
    const componentSource = await formatWithPrettier(
      `
${componentImports.join("\n")}

export default function ${componentName}() {
  return (
    <>
${styleMarkup ? `${styleMarkup}\n` : ""}${jsxBody
  .split("\n")
  .map((line) => `    ${line}`)
  .join("\n")}
    </>
  );
}
`,
    );

    fs.writeFileSync(
      path.join(generatedPagesDir, `${componentName}.jsx`),
      componentSource,
      "utf8",
    );

    registryEntries.push({ pageId, componentName, title, description });
    legacyScriptMap[pageId] = {
      externalScripts,
      inlineScripts,
    };
  }

  const registrySource = await formatWithPrettier(
    `
export const routeEntries = [
${registryEntries
  .map(
    ({ pageId, componentName, title, description }) =>
      `  {
    pageId: '${pageId}',
    paths: ${JSON.stringify(getRoutePaths(pageId))},
    meta: ${JSON.stringify({ title, description })},
    load: () => import('./pages/${componentName}.jsx'),
  },`,
  )
  .join("\n")}
];

export const pageRegistry = Object.fromEntries(
  routeEntries.map((entry) => [entry.pageId, entry.load]),
);
`,
  );

  const legacyScriptsSource = await formatWithPrettier(
    `
export const legacyPageScripts = ${JSON.stringify(legacyScriptMap, null, 2)};
`,
  );

  fs.writeFileSync(
    path.join(rootDir, "src", "generated", "page-registry.js"),
    registrySource,
    "utf8",
  );
  fs.writeFileSync(
    path.join(rootDir, "src", "generated", "legacy-scripts.js"),
    legacyScriptsSource,
    "utf8",
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
