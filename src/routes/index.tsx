import { Routes, Route } from "react-router-dom";
import SignUpPage from "../pages/signUp";
import LoginPage from "../pages/login";

export const Router = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<SignUpPage />} />
  </Routes>
);
