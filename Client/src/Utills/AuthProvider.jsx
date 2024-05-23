import React from "react";
import { useAuth } from "./Auth";
import { Navigate } from "react-router-dom";
const AuthProvider = (props) => {
  const auth = useAuth();

  const token = localStorage.getItem("token");

  if (auth.user || token) {
    return <>{props.children}</>;
  } else {
    return <Navigate to="/login" />;
  }
};

export default AuthProvider;
