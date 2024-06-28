import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { token } = useSelector((state) => state.store);

  if (!token) {
    return <Navigate to={"/"} />;
  }

  return children;
};

export { ProtectedRoute };

const AuthProtected = ({ children }) => {
  const { token } = useSelector((state) => state.store);

  if (token) {
    return <Navigate to={"store/dashboard"} />;
  }

  return children;
};

export { AuthProtected };
