import { v4 as uuidv4 } from "uuid";
import { parseForm } from "~/utils/parseForm";
import ImageKit from "imagekit";
import imageToBase64 from "~/utils/imageTobase64";
const fs = require("fs");

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,	 
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const { method } = req;
  if (method === "POST") {
    try {
      const result = await parseForm(req);
      console.log("RESULT = ", result);
      const file = result.file.file;

      console.log("File Result Object = ", file);
      //? Log the file buffer and file name
      // console.log("File Buffer =", file.buffer);
      // console.log("File Name =", file.newFilename);

      //! Convert Image Name into String uuid Number :-

      const imageName = uuidv4() + "-" + file.newFilename;
      // console.log("ImageName = ", imageName);

      //! To Convert File Path to Buffer :-
      const filePath = `${file.filepath}`;
      const fileBuffer = fs.readFileSync(filePath);

      //! Upload File Image to ImageKit :-
      const uploadResponse = await imagekit.upload({
        file: fileBuffer,
        fileName: imageName,
      });

      //? Log the upload response and image URL
      console.log("Upload Response =", uploadResponse);
      // console.log("Image URL =", uploadResponse.url);

      const imageUrl = uploadResponse.url;
      const fileId = uploadResponse.fileId;
      // console.log("ImageUrl = ", imageUrl);

      res.status(200).json({
        success: true,
        name: imageName,
        url: imageUrl,
        fileId: fileId,
      });
    } catch (error) {
      console.error("Error uploading file to ImageKit:", error);
      res
        .status(500)
        .json({ success: false, error: "Failed to upload file to ImageKit" });
    }
  } else if (method === "DELETE") {
    try {
      const { query } = req;
      // Add logic to delete the
      // console.log("QUERY= ", query);
      imagekit.deleteFile(`${query.name}`, function (error, result) {
        if (error) console.log(error);
        else console.log("DELETE RESULT = ", result);
      });

      res.status(200).json({ success: true, error: null });
    } catch (error) {
      console.error("Error deleting file from ImageKit:", error);
      res
        .status(500)
        .json({ success: false, error: "Failed to delete file from ImageKit" });
    }
  } else {
    res.status(400).json({ success: false, error: "Invalid method" });
  }
}
