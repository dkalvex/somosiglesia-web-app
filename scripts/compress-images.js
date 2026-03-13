import sharp from 'sharp';
import { readdir, unlink, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const FOLDER = 'public/instagram';
const QUALITY = 82;

const files = await readdir(FOLDER);
const images = files.filter(f => /\.(jpe?g|png)$/i.test(f));

let totalBefore = 0;
let totalAfter = 0;

for (const file of images) {
  const input = join(FOLDER, file);
  const output = join(FOLDER, basename(file, extname(file)) + '.webp');

  const before = (await stat(input)).size;

  await sharp(input).webp({ quality: QUALITY }).toFile(output);

  const after = (await stat(output)).size;
  totalBefore += before;
  totalAfter += after;

  const saved = (((before - after) / before) * 100).toFixed(0);
  console.log(`✓ ${file}  ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB  (-${saved}%)`);

  await unlink(input);
}

console.log(`\nTotal: ${(totalBefore/1024/1024).toFixed(1)}MB → ${(totalAfter/1024/1024).toFixed(1)}MB  (-${(((totalBefore-totalAfter)/totalBefore)*100).toFixed(0)}%)`);
