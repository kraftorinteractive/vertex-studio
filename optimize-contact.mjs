import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const filePath = path.join(process.cwd(), 'public', 'assets', 'Group 124@2x.png');
const webpPath = path.join(process.cwd(), 'public', 'assets', 'Group 124@2x.webp');

async function optimizeContactBg() {
  try {
    console.log(`Processing: Group 124@2x.png...`);
    
    // Convert to WebP
    await sharp(filePath)
      .webp({ quality: 80, effort: 6 })
      .toFile(webpPath);
      
    // Delete original heavy file
    await fs.unlink(filePath);
    
    console.log(`\nSuccess! Optimized Contact Background to WebP format.`);
  } catch (err) {
    console.error('Error optimizing image:', err);
  }
}

optimizeContactBg();
