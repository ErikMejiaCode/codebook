import { Routes, Route } from "react-router-dom";
import { ProductList, HomePage, ProductDetail } from "../pages";

export const AllRoutes = ({ darkMode }) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage darkMode={darkMode} />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
};
