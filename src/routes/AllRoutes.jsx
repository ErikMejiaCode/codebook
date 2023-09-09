import { Routes, Route } from "react-router-dom";
import { ProductList, HomePage } from "../pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </>
  );
};
