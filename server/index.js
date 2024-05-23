const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./config/db");

const router = require("./routes/authRoute");

require("dotenv").config();

const PORT = process.env.PORT || "8001";

const app = express();

app.use(bodyParser.json());

app.use(cors());

db();

app.use("/user", router);

app.get('/',(req,res)=>{
  res.status(200).json({message:"jdhsfjkh"})
})


// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

app.listen(PORT, () => console.log(`server connect on ${PORT}`));
