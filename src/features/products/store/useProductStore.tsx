import { createContext, ReactNode, useContext, useState } from "react";
import { Product } from "../models/Product";

const useStore = () => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setSelectedProducts((state) => {
      return [...state, product];
    });
  };

  const removeProduct = (product: Product) => {
    setSelectedProducts((state) => {
      return state.filter((_product) => _product.id !== product.id);
    });
  };

  const findProduct = (product: Product) => {
    return selectedProducts.find((_product) => _product.id == product.id);
  };

  const toggleProduct = (product: Product) => {
    const _product = findProduct(product);

    if (_product) {
      removeProduct(product);
    } else {
      addProduct(product);
    }
  };

  return {
    selectedProducts,
    addProduct,
    removeProduct,
    toggleProduct,
    findProduct,
  };
};

// ----------------------------------------------------------------------

type ProductsState = ReturnType<typeof useStore>;

const ProductsContext = createContext<ProductsState>({} as ProductsState);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ProductsContext.Provider value={useStore()}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsStore = () => {
  const context = useContext(ProductsContext);

  if (context === undefined) {
    throw new Error("ProductsContext está sendo consumido fora do Provider");
  }

  return context;
};
