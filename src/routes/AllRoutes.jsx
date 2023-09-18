import { Routes, Route } from "react-router-dom";
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

        <Route path="cart" element={<CartPage />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
};
