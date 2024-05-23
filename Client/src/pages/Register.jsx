import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { registerSchema } from "../Utills/ValidationSchema";
import toast from "react-hot-toast";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    role: "",
  });

  // const url = "http://localhost:8001/";

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerSchema.validate(formData, { abortEarly: false });
      console.log("clicked");
      const response = await axios.post(`http://localhost:8080/user/signup`, formData);
      console.log(response.data);

      toast.success(response.data.message);
    } catch (error) {
      if (error.inner) {
        error.inner.forEach((err) => {
          toast.error(err.message);
        });
      } else if (error.response) {
        toast.error(error.response.data.error || "Registration failed");
      } else {
        toast.warning("An unexpected error occurred");
      }
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full h-80vh">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <h2 className="text-2xl mb-6 text-center font-semibold  text-red-400">Sign Up</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
              Gender
            </label>
            <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gender" name="gender" value={formData.gender} onChange={handleChange}>
              <option value="" disabled>
                Select your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <span className="block text-gray-700 text-sm font-bold mb-2">Role</span>
            <div className="flex items-center space-x-10">
              <div className="flex items-center">
                <input id="user" type="radio" name="role" value="user" checked={formData.role === "user"} onChange={handleChange} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                <label htmlFor="user" className="ml-2 block text-gray-700 text-sm">
                  User
                </label>
              </div>
              <div className="flex items-center">
                <input id="vendor" type="radio" name="role" value="vendor" checked={formData.role === "vendor"} onChange={handleChange} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                <label htmlFor="vendor" className="ml-2 block text-gray-700 text-sm">
                  Vendor
                </label>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Register Now
            </button>
          </div>

          <p className="mt-4 text-center">
            Already i've an Account
            <NavLink className="text-blue-500 ml-2 font-bold" to="/login">
              Login Now ....
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Register;
