import React from "react";
import { useAuth } from "./Auth";
import { Navigate } from "react-router-dom";
const AuthProvider = (props) => {
  const auth = useAuth();

  if (auth.user) {
    return <>{props.children}</>;
  } else {
    return <Navigate to="/login" />;
  }
};

export default AuthProvider;
