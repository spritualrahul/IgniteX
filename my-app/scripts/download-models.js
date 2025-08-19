const fs = require('fs');
const https = require('https');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

const models = [
  {
    url: 'https://res.cloudinary.com/demo/raw/upload/v1620000000/laptop.glb',
    path: 'public/models/laptop.glb'
  },
  {
    url: 'https://res.cloudinary.com/demo/raw/upload/v1620000000/phone.glb',
    path: 'public/models/phone.glb'
  }
];

// Create models directory if it doesn't exist
const modelsDir = path.join(process.cwd(), 'public/models');
if (!fs.existsSync(modelsDir)) {
  fs.mkdirSync(modelsDir, { recursive: true });
}

function downloadFile(url, filePath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${url} to ${filePath}`);
        resolve(true);
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete the file if there's an error
      console.error(`Error downloading ${url}:`, err.message);
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log('Starting model downloads...');
  try {
    for (const model of models) {
      await downloadFile(model.url, model.path);
    }
    console.log('All models downloaded successfully!');
  } catch (error) {
    console.error('Error downloading models:', error);
    console.log('\nNote: The 3D models could not be downloaded automatically.');
    console.log('Please manually download the following files and place them in the public/models directory:');
    console.log('1. laptop.glb');
    console.log('2. phone.glb');
    console.log('\nYou can find free 3D models on websites like:');
    console.log('- Sketchfab (https://sketchfab.com/)');
    console.log('- Poly Haven (https://polyhaven.com/)');
    console.log('- TurboSquid (https://www.turbosquid.com/)');
  }
}

downloadAll();
