import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../../shared/components/ErrorPage/NotFoundPage";
import ProductsCart from "./components/favorite-products";
import ProductDetailPage from "./pages/product-detail";
import ProductListPage from "./pages/product-list";
import { ProductsProvider } from "./store/useProductStore";

const ProductsModule = () => {
  return (
    <ProductsProvider>
      <ProductsCart />

      <Routes>
        <Route path="list" element={<ProductListPage />}></Route>
        <Route path=":id" element={<ProductDetailPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </ProductsProvider>
  );
};

export default ProductsModule;
