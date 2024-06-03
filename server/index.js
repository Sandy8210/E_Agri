import express from "express";
import "dotenv/config";
import { dbConnect } from "./config/db.js";
import cors from "cors";
import productRouter from "./routes/productRoute.js";

// ! APP CONFIG
const app = express();
const PORT = process.env.PORT;

// ! MIDDLEWARE
app.use(express.json());
app.use(cors());

// ! DB CONNECTION
dbConnect();

// ! API ENDPOINTS
app.use("/api/product", productRouter);

app.get("/", (req, res) =>
  res.status(200).json({ success: true, message: "Connect Successful" })
);

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
