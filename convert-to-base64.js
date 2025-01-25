import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imagePath = join(__dirname, 'static', 'img', 'maskable-icon.png');
const imageBuffer = readFileSync(imagePath);
const base64String = `data:image/png;base64,${imageBuffer.toString('base64')}`;

// Write to a new file
writeFileSync('maskable-icon-base64.txt', base64String);
console.log('Base64 conversion complete. Check maskable-icon-base64.txt');
