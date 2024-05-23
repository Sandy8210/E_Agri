const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: false,
    },
    password: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      require: true,
    },
    activationCode: {
      type: String,
      require: true,
      default: null,
    },
    isActivated: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
