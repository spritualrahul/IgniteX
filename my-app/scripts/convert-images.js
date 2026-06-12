const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const QUALITY = 80; // Good balance of quality vs size

async function convertToWebP(inputPath, outputPath) {
  const stats = fs.statSync(inputPath);
  const sizeBefore = (stats.size / 1024).toFixed(0);
  
  await sharp(inputPath)
    .webp({ quality: QUALITY })
    .toFile(outputPath);
  
  const newStats = fs.statSync(outputPath);
  const sizeAfter = (newStats.size / 1024).toFixed(0);
  const saved = (((stats.size - newStats.size) / stats.size) * 100).toFixed(1);
  
  console.log(`✅ ${path.basename(inputPath)}: ${sizeBefore}KB → ${sizeAfter}KB (${saved}% saved)`);
  return { before: stats.size, after: newStats.size };
}

async function processDirectory(dir) {
  let totalBefore = 0;
  let totalAfter = 0;
  let count = 0;
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      const sub = await processDirectory(fullPath);
      totalBefore += sub.before;
      totalAfter += sub.after;
      count += sub.count;
      continue;
    }
    
    const ext = path.extname(entry.name).toLowerCase();
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;
    
    // Skip tiny files (< 50KB) — not worth converting
    const stats = fs.statSync(fullPath);
    if (stats.size < 50 * 1024) {
      console.log(`⏭️  Skipping ${entry.name} (${(stats.size/1024).toFixed(0)}KB — too small)`);
      continue;
    }
    
    const webpPath = fullPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    
    try {
      const result = await convertToWebP(fullPath, webpPath);
      totalBefore += result.before;
      totalAfter += result.after;
      count++;
    } catch (err) {
      console.error(`❌ Failed: ${entry.name} — ${err.message}`);
    }
  }
  
  return { before: totalBefore, after: totalAfter, count };
}

async function main() {
  console.log('🔧 Converting images to WebP...\n');
  
  const result = await processDirectory(PUBLIC_DIR);
  
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`📊 Total: ${result.count} images converted`);
  console.log(`   Before: ${(result.before / 1024 / 1024).toFixed(1)} MB`);
  console.log(`   After:  ${(result.after / 1024 / 1024).toFixed(1)} MB`);
  console.log(`   Saved:  ${((result.before - result.after) / 1024 / 1024).toFixed(1)} MB (${(((result.before - result.after) / result.before) * 100).toFixed(1)}%)`);
}

main().catch(console.error);
