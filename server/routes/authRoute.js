const express = require("express");
const {
  register,
  login,
  getProfile,
} = require("../controllers/authController");
const authenticateToken = require("../middleware/authToken");

const routes = express.Router();

routes.post("/signup", register);
routes.post("/signin", login);
routes.get("/profile", authenticateToken, getProfile);

module.exports = routes;
