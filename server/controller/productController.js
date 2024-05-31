import productModel from "../model/productModel.js";

//  TESTING PROCESS

const test = async (req, res) => {
  try {
    res.status(200).json({ success: true, message: "Test success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Test failed" });
  }
};

//  ADD PRODUCT

const addProduct = async (req, res) => {
  let file_name = `${req.file.filename}`;
  const product = new productModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: file_name,
    category: req.body.category,
    stock: req.body.stock,
    offer: req.body.offer,
  });

  try {
    await product.save();
    res.status(200).json({ success: true, message: "Product added success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Product added failed" });
  }
};

// LIST PRODUCT

const productList = async (req, res) => {
  try {
    const product = await productModel.find({});
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "error" });
  }
};

export { addProduct, test, productList };
