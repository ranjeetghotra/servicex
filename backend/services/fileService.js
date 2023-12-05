const sharp = require('sharp');
const fs = require('fs').promises;

const UPLOADS_DIR = 'uploads';

// Create the 'uploads' directory if it doesn't exist
fs.mkdir(UPLOADS_DIR, { recursive: true })
    .catch(err => {
        console.error('Error creating directory:', err);
    });

async function uploadBase64(base64Data) {
    const base64WithoutPrefix = base64Data.replace(/^data:image\/\w+;base64,/, '');

    // Create a buffer from the base64 data
    const buffer = Buffer.from(base64WithoutPrefix, 'base64');

    try {
        // Convert the image to WebP format
        const outputBuffer = await sharp(buffer).webp().toBuffer();

        // Generate a unique filename (you may want to use a more robust method)
        const filename = `image_${Date.now()}.webp`;

        // Save the WebP image to the 'uploads' directory
        const filePath = `${UPLOADS_DIR}/${filename}`;
        await fs.writeFile(filePath, outputBuffer);

        return filename; // Return the filename
    } catch (error) {
        console.error('Error saving image:', error);
        throw new Error('Internal Server Error');
    }
}

module.exports = { uploadBase64 }