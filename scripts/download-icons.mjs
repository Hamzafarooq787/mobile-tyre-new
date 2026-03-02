import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "..");

const ICON_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/site-icon%20%282%29-KkpblVipb0yqZvgK1ZOtGU8nHr1OxO.png";

async function downloadImage(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, buffer);
  console.log(`Saved: ${dest} (${buffer.length} bytes)`);
}

const destinations = [
  join(projectRoot, "public", "site-icon.png"),
  join(projectRoot, "app", "icon.png"),
];

for (const dest of destinations) {
  await downloadImage(ICON_URL, dest);
}

console.log("All icon files saved successfully.");
