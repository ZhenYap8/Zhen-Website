import fs from "fs/promises";
import TurndownService from "turndown";

const [,, inPath, outPath] = process.argv;
if (!inPath || !outPath) {
  console.error("Usage: node scripts/html-to-md.mjs <in.html> <out.md>");
  process.exit(1);
}

const html = await fs.readFile(inPath, "utf8");
const turndown = new TurndownService({ headingStyle: "atx", codeBlockStyle: "fenced" });
const md = turndown.turndown(html);

await fs.mkdir(outPath.split("/").slice(0, -1).join("/"), { recursive: true });
await fs.writeFile(outPath, md, "utf8");
console.log(`Wrote ${outPath}`);