import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { glob } from "glob";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const sourceFiles = await glob("src/**/*.{css,js,jsx}", {
  absolute: true,
  cwd: projectRoot,
  ignore: ["src/generated/**"],
});
const missing = [];
const assetPattern = /(?:src\s*=\s*["']|url\(\s*["']?)(\/?img\/[^"')?#}]+)/g;

await Promise.all(
  sourceFiles.map(async (sourceFile) => {
    const source = await readFile(sourceFile, "utf8");

    for (const match of source.matchAll(assetPattern)) {
      const publicPath = decodeURIComponent(match[1].replace(/^\//, ""));
      const assetPath = path.join(projectRoot, "public", publicPath);

      try {
        await access(assetPath);
      } catch {
        missing.push(
          `${path.relative(projectRoot, sourceFile)} -> /${publicPath}`,
        );
      }
    }
  }),
);

if (missing.length > 0) {
  console.error(`Missing static assets:\n${missing.sort().join("\n")}`);
  process.exitCode = 1;
} else {
  console.log(`Validated static assets across ${sourceFiles.length} files.`);
}
