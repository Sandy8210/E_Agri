import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";
import Auth from "./Utills/Auth";
import AuthProvider from "./Utills/AuthProvider";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./component/ForgotPassword";
import { Toaster } from "react-hot-toast";
import AdminDashBoard from "./admin/AdminDashBoard";

const App = () => {
  return (
    <>
      <Auth>
        <Navbar />
        <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route
            path="/profile"
            element={
              <AuthProvider>
                <Profile />
              </AuthProvider>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/adminDashboard" element={<AdminDashBoard />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Auth>
    </>
  );
};

export default App;
