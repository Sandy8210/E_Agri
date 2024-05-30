import mongoose from "mongoose";

const DB = process.env.DB_URL;

export const connection = async () => {
  await mongoose

  .connect(DB)
    .then(() => console.log("DB connect Successful"))
    .catch((err) => console.log(err));
};
