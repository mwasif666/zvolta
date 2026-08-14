import { writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import { glob } from "glob";
import { blogPosts } from "../src/data/pages/blogs/blogPosts.js";

const SITE_URL = "https://zvolta.com";
const OUTPUT_URL = new URL("../public/sitemap.xml", import.meta.url);
const projectRoot = fileURLToPath(new URL("../", import.meta.url));

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

const pageDataFiles = await glob("src/data/pages/*/pageData.js", {
  absolute: true,
  cwd: projectRoot,
});
const pageData = await Promise.all(
  pageDataFiles.map(
    async (file) => (await import(pathToFileURL(file))).default,
  ),
);
const routePaths = pageData
  .filter(
    (route) =>
      route.pageId !== "404" &&
      !route.meta?.noIndex &&
      !route.paths[0].includes(":"),
  )
  .map((route) => route.paths[0]);
const blogPaths = blogPosts.map((post) => `/blogs/${post.slug}`);
const uniquePaths = [...new Set([...routePaths, ...blogPaths])];

const body = uniquePaths
  .map(
    (path) =>
      `  <url><loc>${escapeXml(new URL(path, SITE_URL).toString())}</loc></url>`,
  )
  .join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

await writeFile(fileURLToPath(OUTPUT_URL), sitemap, "utf8");
