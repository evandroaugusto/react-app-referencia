import { useQuery } from "@tanstack/react-query";
import { fetchCategories, fetchProducts } from "../../api/products.api";

const useProductList = () => {
  const { data: products, isLoading: isProductLoading } = useQuery(
    ["products"],
    () => fetchProducts()
  );

  const { data: categories, isLoading: isCategoryLoading } = useQuery(
    ["categories"],
    () => fetchCategories()
  );

  return {
    products: products || [],
    categories: categories || [],
    isLoading: isProductLoading || isCategoryLoading,
  };
};

export default useProductList;
