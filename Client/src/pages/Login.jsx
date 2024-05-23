import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { loginSchema } from "../Utills/ValidationSchema";
import axios from "axios";
import { useAuth } from "../Utills/Auth";

const Login = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const auth = useAuth();
  const handleInput = (e) => {
    setUserInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await loginSchema.validate(userInput, { abortEarly: false });

      if (
        userInput.email === "Admin@gmail.com" &&
        userInput.password === "Admin@001"
      ) {
        toast.success("Welcome Back Chief!");
        navigate("/adminDashboard");
      } else {
        try {
          const loginResponse = await axios.post(
            "http://localhost:8080/user/signin",
            userInput
          );

          const name = loginResponse.data.user.name;
          const token = loginResponse.data.token;
          toast.success(loginResponse.data.message);
          localStorage.setItem("token", token);
          auth.login(name);
          navigate("/profile");
        } catch (err) {
          console.log(err.response);
          if (err.response && err.response.data) {
            toast.error(
              err.response.data.message || "An error occurred during login."
            );
          } else {
            toast.error("An error occurred during login.");
          }
        }
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else if (error.inner) {
        error.inner.forEach((err) => {
          toast.error(err.message);
        });
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full h-90vh">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleLogin}
        >
          <h2 className="text-2xl mb-6 text-center font-semibold  text-red-400">
            Login
          </h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleInput}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="********"
              onChange={handleInput}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login Now
            </button>
            <NavLink
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              to="/forgot"
            >
              Forgot Password?
            </NavLink>
          </div>
          <p className="mt-4 text-center">
            Create a new User?
            <NavLink className="text-blue-500 ml-2 font-bold" to="/register">
              Register Now ....
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
