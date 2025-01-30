import multer from "multer";

// diskStorage config for multer
// const storage = multer.diskStorage({});
const storage = multer.diskStorage({
  filename: function (re, file, callback) {
    callback(null, `${Date.now()}_${file.originalname}`);
  },
});

// creating upload middleware to parse multi/part formdata
const upload = multer({ storage });

export default upload;
