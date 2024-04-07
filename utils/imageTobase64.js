// utils/imageToBase64.js
const fs = require("fs");
const path = require("path");

function imageToBase64(imagePath) {
  // Ensure the path is absolute
  const absolutePath = path.resolve(imagePath);

  // Read the image file
  const imageBuffer = fs.readFileSync(absolutePath);

  // Convert the image buffer to a Base64 string
  const base64Image = imageBuffer.toString("base64");

  return base64Image;
}

module.exports = imageToBase64;
