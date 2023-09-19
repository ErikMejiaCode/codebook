import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import {
  ProductList,
  HomePage,
  ProductDetail,
  Login,
  Register,
  CartPage,
} from "../pages";

export const AllRoutes = ({ darkMode }) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage darkMode={darkMode} />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route
          path="cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};
