const mogoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.MONGO_DB_URL;

const db = () => {
  mogoose.connect(PORT).then((res) => console.log("mongoose connected"));
};

module.exports = db;
