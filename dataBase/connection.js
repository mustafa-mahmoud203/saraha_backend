import mongoose from "mongoose";

const connectDB = async () => {
  return await mongoose
    .connect(`mongodb://127.0.0.1:27017/mongodbDataBase`)
    .then(() => {
      console.log("Data base connected");
    })
    .catch((err) => {
      console.log(`fail to connect data base........${err}`);
    });
};

export default connectDB;
