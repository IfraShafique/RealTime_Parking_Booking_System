import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";
import {jwtDecode} from "jwt-decode"; // Import jwtDecode from the correct library

export const PrivateRoutes = ({ children, expectedRole }) => {
  const { isAuthenticated, user } = useAuth();
  console.log("isAuthenticated:", isAuthenticated());
  console.log("user:", user);

//   useEffect(() => {
//     if (isAuthenticated()) {
//       const token = localStorage.getItem("token");
//       try {
//         const decodedToken = jwtDecode(token); // Use jwtDecode here
//         console.log("decodedToken:", decodedToken);
//         if (decodedToken.role !== expectedRole) {
//           // Navigate to unauthorized route
//           // You might need to use the Navigate component in the actual render, not here
//           return <Navigate to="/unauthorized" />;
//         }
//       } catch (error) {
//         console.error("Error decoding token:", error);
//       }
//     }
//   }, []);

  if (!isAuthenticated()) {
    return <Navigate to="/" />;
  }

  if (expectedRole && user && user.role !== expectedRole) {
    return <Navigate to="/unauthorized" />;
  }

  return <>{children}</>;
};
