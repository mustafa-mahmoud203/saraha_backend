import express from "express";
import "dotenv/config";
import authRouter from "./src/routes/auth.route.js";
import messageRouter from "./src/routes/message.route.js";

import { errorHandilng } from "./src/utils/errorHandilng.js";
import connectDB from "./dataBase/connection.js";
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use("/", authRouter);
app.use("/message", messageRouter);
app.use("*", (res, req, next) => {
  return next(new Error("404 Page Not Found", { cause: 404 }));
});

app.use(errorHandilng);

connectDB();
app.listen(port, () => console.log(`server running om port... ${port}!`));
