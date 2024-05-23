const User = require("../models/userModel");
const createError = require("../error/appError");
const bcrypt = require("bcryptjs");

// REGISTER USER

exports.register = async (req, res, next) => {
  try {
    const user = User.findOne({ email: req.body.email });

    if (user) {
      return next(new createError("user Already exists!", 400));
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    // Assign a JWT token on user

    // Assign JWT (json web token) to user

    const token = jwt.sign({ _id: newUser._id }, "secretkey123", {
      expiresIn: "90d",
    });

    res.status(201).json({
      status: "success",
      message: "user registered successful",
      token,
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    next(error);
  }
};
