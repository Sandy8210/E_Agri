import express from "express";
import "dotenv/config";
import { dbConnect } from "./config/db.js";

// ! APP CONFIG

const app = express();
const PORT = process.env.PORT;

// ! MIDDLEWARE

// ! DB CONNECTION

dbConnect();

// ! API ENDPOINTS

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
