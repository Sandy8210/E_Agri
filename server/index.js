import express from "express";
import "dotenv/config.js";
import { connection } from "./config/db.js";
import route from "./routes/productRoute.js";
import cors from "cors";

// APP CONFIG & DECLARATION

const app = express();
const PORT = process.env.PORT || 8080;

// MIDDLEWARE

app.use(express.json());
app.use(cors());

// DB CONNECTION
connection();

// API ENDPOINTS
app.use("/api/Product", route);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Working API Perfect" });
});

// SERVER CONNECTION
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
