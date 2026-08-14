import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const directoryPath = path.join(process.cwd(), 'public', 'assets', 'portfolio');

async function optimizeImages() {
  try {
    const files = await fs.readdir(directoryPath);
    let count = 0;
    
    for (const file of files) {
      if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        const filePath = path.join(directoryPath, file);
        const nameWithoutExt = path.parse(file).name;
        const webpPath = path.join(directoryPath, `${nameWithoutExt}.webp`);
        
        console.log(`Processing: ${file}...`);
        
        // Convert to WebP
        await sharp(filePath)
          .webp({ quality: 80, effort: 6 }) // high effort compression
          .toFile(webpPath);
          
        // Delete original heavy file
        await fs.unlink(filePath);
        
        count++;
      }
    }
    
    console.log(`\nSuccess! Optimized ${count} portfolio images to WebP format.`);
  } catch (err) {
    console.error('Error optimizing images:', err);
  }
}

optimizeImages();
