import express from "express";
import {
  addProduct,
  listProduct,
  test,
} from "../controller/productController.js";
import multer from "multer";
import fs from "fs";
import path from "path";

const productRouter = express.Router();

productRouter.get("/test", test);

// ! IMAGE STORAGE
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const category = req.body.product_category;
    const dir = path.join("uploads", category);

    fs.mkdirSync(dir, { recursive: true });

    cb(null, dir);
  },
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// ADD PRODUCT
productRouter.post("/add", upload.single("product_image"), addProduct);

// LIST PRODUCT
productRouter.get("/list", listProduct);

export default productRouter;
