import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const svgPath = join(rootDir, 'public', 'images', 'cyventra-favicon.svg');
const outputDir = join(rootDir, 'public', 'images');

const svgBuffer = readFileSync(svgPath);

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
];

for (const { name, size } of sizes) {
  await sharp(svgBuffer, { density: 300 })
    .resize(size, size)
    .png()
    .toFile(join(outputDir, name));

  console.log(`Generated ${name}`);
}

// Multi-size ICO for legacy browsers and some tab renderers
const png16 = await sharp(svgBuffer, { density: 300 }).resize(16, 16).png().toBuffer();
const png32 = await sharp(svgBuffer, { density: 300 }).resize(32, 32).png().toBuffer();

function createIco(images) {
  const count = images.length;
  const headerSize = 6;
  const entrySize = 16;
  const offset = headerSize + entrySize * count;

  let dataOffset = offset;
  const entries = images.map(({ buffer, size }) => {
    const entry = {
      width: size === 256 ? 0 : size,
      height: size === 256 ? 0 : size,
      colorCount: 0,
      reserved: 0,
      planes: 1,
      bitCount: 32,
      bytesInRes: buffer.length,
      imageOffset: dataOffset,
    };
    dataOffset += buffer.length;
    return entry;
  });

  const totalSize = dataOffset;
  const output = Buffer.alloc(totalSize);

  output.writeUInt16LE(0, 0);
  output.writeUInt16LE(1, 2);
  output.writeUInt16LE(count, 4);

  entries.forEach((entry, index) => {
    const base = headerSize + index * entrySize;
    output.writeUInt8(entry.width, base);
    output.writeUInt8(entry.height, base + 1);
    output.writeUInt8(entry.colorCount, base + 2);
    output.writeUInt8(entry.reserved, base + 3);
    output.writeUInt16LE(entry.planes, base + 4);
    output.writeUInt16LE(entry.bitCount, base + 6);
    output.writeUInt32LE(entry.bytesInRes, base + 8);
    output.writeUInt32LE(entry.imageOffset, base + 12);
  });

  let writeOffset = offset;
  images.forEach(({ buffer }) => {
    buffer.copy(output, writeOffset);
    writeOffset += buffer.length;
  });

  return output;
}

const icoBuffer = createIco([
  { buffer: png16, size: 16 },
  { buffer: png32, size: 32 },
]);

writeFileSync(join(rootDir, 'public', 'favicon.ico'), icoBuffer);
console.log('Generated favicon.ico');
