import multer from "multer";
import { nanoid } from "nanoid";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const fileUpload = (fileTypesValidation = [], __path = "general") => {
  const fullPath = path.join(__dirname, `../uploads/${__path}`);

  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, fullPath);
    },
    filename: (req, file, cb) => {
      const fileName = nanoid() + file.originalname;
      file.dest = `uploads/${__path}/${fileName}`;

      cb(null, fileName);
    },
  });

  const fileFilter = (req, file, cb) => {
    if (fileTypesValidation.includes(file.mimetype)) cb(null, true);
    else cb("in-valid file type", false);
  };
  const uploads = multer({ fileFilter, storage });
  return uploads;
};
