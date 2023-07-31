import { Routes, Route } from "react-router-dom";
import SignUpPage from "../pages/signUp";
import LoginPage from "../pages/login";
import DashBoardPage from "../pages/dashboard";

export const Router = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<SignUpPage />} />
    <Route path="/dashboard" element={<DashBoardPage/>} />
  </Routes>
);
