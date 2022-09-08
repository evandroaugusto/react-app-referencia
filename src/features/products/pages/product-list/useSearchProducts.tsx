import { useCallback, useEffect, useState } from "react";
import { Product } from "../../models/Product";

const useSearchProducts = (products: Product[]) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (!products.length) return;
    setFilteredProducts(products);
  }, [products]);

  const searchProduct = useCallback(
    (searchTerm: string, categoryTerm: string) => {
      const compare = (value1: string, value2: string) => {
        return Boolean(value1.toLowerCase().includes(value2.toLowerCase()));
      };

      const filtered = products.filter(({ title, category }) => {
        return compare(title, searchTerm) && compare(category, categoryTerm);
      });

      setFilteredProducts(filtered);
    },
    [products]
  );

  return {
    filteredProducts,
    searchProduct,
  };
};

export default useSearchProducts;
