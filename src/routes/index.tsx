import { Routes, Route } from 'react-router-dom';
import SignUpPage from '../pages/signUp';





export const Router = () => (
  <Routes>
    <Route path="/" element={<SignUpPage />} />
  </Routes>
);