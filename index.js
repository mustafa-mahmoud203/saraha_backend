import express from "express";
import "dotenv/config";
import authRouter from "./src/routes/auth.route.js";
import messageRouter from "./src/routes/message.route.js";
import userRouter from "./src/routes/user.route.js";

import { errorHandilng } from "./src/utils/errorHandilng.js";
import connectDB from "./dataBase/connection.js";
import { fileUpload } from "./src/utils/multer.js";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use("/", authRouter);
app.use("/", messageRouter);
app.use("/user", userRouter);
app.use("/uploads", express.static(path.join(__dirname,"./src/uploads")));
app.use("*", (res, req, next) => {
  return next(new Error("404 Page Not Found", { cause: 404 }));
});

app.use(errorHandilng);
fileUpload();
connectDB();
app.listen(port, () => console.log(`server running om port... ${port}!`));
