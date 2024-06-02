import mongoose from "mongoose";

const DB = process.env.MONGO_DB_URL;

export const dbConnect = async () => {
  await mongoose
    .connect(DB)
    .then(() => console.log("DB connect successful"))
    .catch((err) => console.log(err));
};
