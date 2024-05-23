import React, { useState } from "react";
import { forgotPasswordSchema } from "../Utills/ValidationSchema";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [data, setData] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleForgot = async (e) => {
    e.preventDefault();

    try {
      await forgotPasswordSchema.validate(data, { abortEarly: false });
      toast.success("Your Password Successfully Updated");
    } catch (error) {
      if (error.inner) {
        error.inner.forEach((err) => {
          toast.error(err.message);
        });
      }
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full h-90vh">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleForgot}
        >
          <h2 className="text-2xl mb-6 text-center font-semibold  text-red-400">
            Forgot Password
          </h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Current Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="currentPassword"
              type="password"
              name="currentPassword"
              placeholder="currentPassword"
              onChange={handleInput}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              New Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="newPassword"
              type="password"
              name="newPassword"
              placeholder="newPassword"
              onChange={handleInput}
            />
          </div>
          <div className="flex items-center mt-10 justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Forgot Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
