import { Routes, Route } from "react-router-dom";
import SignUpPage from "../pages/signUp";
import LoginPage from "../pages/login";
import DashBoardPage from "../pages/dashboard";
import { ProtectedRoutes } from "./protectedRoutes";
import { ContactProvider } from "../provides/ContactContext";

export const Router = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/register" element={<SignUpPage />} />
    <Route path="/dashboard" element={<ProtectedRoutes />}>
      <Route
        index
        element={
          <ContactProvider>
            <DashBoardPage />
          </ContactProvider>
        }
      />
    </Route>
  </Routes>
);
