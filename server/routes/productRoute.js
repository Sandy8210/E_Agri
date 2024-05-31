import express from "express";
import multer from "multer";
import fs from "fs";
import { addProduct, productList, test } from "../controller/productController.js";

const productRouter = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const { category } = req.body;
    const uploadDir = `upload/${category}`;
    fs.mkdirSync(uploadDir, { recursive: true });
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

productRouter.get("/test", test);

productRouter.post("/add", upload.single("image"), addProduct);
productRouter.get('/list', productList)

export default productRouter;
