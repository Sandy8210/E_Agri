import ProductModel from "../models/productModel.js";

// ! Test
const test = async (req, res) => {
  res.status(200).json({ success: true, message: "Test File run successful" });
};

// ! ADD PRODUCT
const addProduct = async (req, res) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ success: false, message: "No file uploaded" });
  }

  const {
    product_name,
    company_name,
    product_desc,
    product_category,
    product_price,
    product_offer,
  } = req.body;

  if (
    !product_name ||
    !company_name ||
    !product_desc ||
    !product_category ||
    !product_price
  ) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }
  let image_filename = `${req.file.filename}`;

  console.log(req.body.product_name);

  const product = new ProductModel({
    product_image: image_filename,
    product_name,
    company_name,
    product_desc,
    product_category,
    product_price,
    product_offer: product_offer || 0,
  });

  try {
    await product.save();
    res
      .status(200)
      .json({ success: true, message: "Product Added successfuly" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Add product failed" });
  }
};

// ! LIST PRODUCT
const listProduct = async (req, res) => {
  try {
    const product = await ProductModel.find({});

    res.status(200).json({ success: true, data: product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
};



export { test, addProduct, listProduct };
