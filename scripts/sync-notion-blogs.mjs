import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const NOTION_API = "https://www.notion.so/api/v3/loadPageChunk";
const OUTPUT_FILE = fileURLToPath(
  new URL(
    "../src/data/pages/blogs/notionBlogPosts.generated.js",
    import.meta.url,
  ),
);

const BLOG_SOURCES = [
  {
    pageId: "30494b71-0bbe-80ab-944a-d16ba805be24",
    slug: "coworking-ev-charging-usp",
    category: "Hosts",
    image: "/img/Blogs/coworking.png",
  },
  {
    pageId: "30494b71-0bbe-80d8-94ae-dad7b83fecc5",
    slug: "fuel-station-charging-footfall",
    category: "Hosts",
    image: "/img/Blogs/people%20came.png",
  },
  {
    pageId: "30494b71-0bbe-80b5-85ba-cf9bc6230214",
    slug: "ev-driver-week-range-anxiety",
    category: "EV Users",
    image: "/img/Blogs/from%20range.png",
  },
  {
    pageId: "30494b71-0bbe-8020-8636-f513b6704b7b",
    slug: "my-parents-said-yes-ev-bike",
    category: "EV Users",
    image: "/img/Blogs/my%20parents%20said.png",
  },
  {
    pageId: "30494b71-0bbe-80b3-a38b-cdc24adb5cef",
    slug: "evs-can-break-the-monopoly",
    category: "Sustainability",
    image: "/img/Blogs/evs%20can.png",
  },
  {
    pageId: "30494b71-0bbe-8083-86f3-e6d93c47602a",
    slug: "showroom-charging-closes-deals",
    category: "Operators",
    image: "/img/Blogs/the%2010%25.png",
  },
  // These two Notion articles intentionally remain hidden until local images exist:
  // Women Need Predictable Routes — 39894b71-0bbe-80b4-a0ed-e64871cc8213
  // Charging Without Asking Anyone — 39894b71-0bbe-8059-925f-d397391244f7
];

function unwrap(record) {
  return record?.value?.value ?? record?.value;
}

function plainText(property) {
  if (!Array.isArray(property)) return "";

  return property
    .map((part) => (Array.isArray(part) ? String(part[0] ?? "") : ""))
    .join("");
}

function formatDate(timestamp) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(timestamp));
}

function groupBodyBlocks(root, records) {
  const body = [];

  for (const blockId of root.content ?? []) {
    const block = unwrap(records[blockId]);
    if (!block) continue;

    const text = plainText(block.properties?.title);

    if (block.type === "image") continue;
    if (block.type === "divider") {
      body.push({ type: "divider" });
      continue;
    }

    if (!text.trim()) continue;

    if (block.type === "bulleted_list" || block.type === "numbered_list") {
      const ordered = block.type === "numbered_list";
      const previous = body.at(-1);

      if (previous?.type === "list" && previous.ordered === ordered) {
        previous.items.push(text);
      } else {
        body.push({ type: "list", ordered, items: [text] });
      }
      continue;
    }

    const typeMap = {
      sub_header: "heading",
      sub_sub_header: "subheading",
      quote: "quote",
      text: "paragraph",
    };

    body.push({ type: typeMap[block.type] ?? "paragraph", text });
  }

  return body;
}

async function fetchBlog(source) {
  const response = await fetch(NOTION_API, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      pageId: source.pageId,
      limit: 100,
      cursor: { stack: [] },
      chunkNumber: 0,
      verticalColumns: false,
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Notion returned ${response.status} for page ${source.pageId}`,
    );
  }

  const payload = await response.json();
  const records = payload.recordMap?.block ?? {};
  const root = unwrap(records[source.pageId]);

  if (!root) {
    throw new Error(
      `Notion page ${source.pageId} was not present in the response`,
    );
  }

  const missingBlocks = (root.content ?? []).filter(
    (blockId) => !records[blockId],
  );

  if (missingBlocks.length > 0) {
    throw new Error(
      `Notion response for ${source.pageId} is incomplete (${missingBlocks.length} blocks missing)`,
    );
  }

  const body = groupBodyBlocks(root, records);
  const articleText = body
    .flatMap((block) => block.items ?? block.text ?? [])
    .join(" ");
  const wordCount = articleText.trim().split(/\s+/u).filter(Boolean).length;
  const excerpt = body.find((block) => block.type === "paragraph")?.text ?? "";
  const coverBlock = (root.content ?? [])
    .map((blockId) => unwrap(records[blockId]))
    .find((block) => block?.type === "image");

  return {
    id: source.slug,
    slug: source.slug,
    sourcePageId: source.pageId,
    category: source.category,
    date: formatDate(root.last_edited_time ?? root.created_time),
    readTime: `${Math.max(1, Math.ceil(wordCount / 200))} min read`,
    author: "ZVolta",
    image: source.image,
    cardImage: source.image,
    imageCaption: plainText(coverBlock?.properties?.caption),
    title: plainText(root.properties?.title),
    excerpt,
    body,
  };
}

const posts = await Promise.all(BLOG_SOURCES.map(fetchBlog));
const banner = [
  "// This file is generated from the public ZVolta Notion collection.",
  "// Run `npm run sync:blogs` to refresh the exact article copy.",
  "// Do not edit this file by hand.",
  "",
];
const source = `${banner.join("\n")}export const notionBlogPosts = ${JSON.stringify(
  posts,
  null,
  2,
)};\n`;

await writeFile(OUTPUT_FILE, source, "utf8");
console.log(
  `Synced ${posts.length} image-backed Notion blogs to ${path.relative(process.cwd(), OUTPUT_FILE)}`,
);
