import { useQuery } from "@tanstack/react-query";
import { clientHttp } from "../../../core/services/client-http";
import { Cart } from "../models/Cart";
import { Product } from "../models/Product";

export const fetchProducts = () => {
  return clientHttp.get<Product[]>("products").then((res) => res.data);
};

export const fetchProductsByCategory = (category: string) => {
  return clientHttp
    .get<Product[]>(`products/category/${category}`)
    .then((res) => res.data);
};

export const fetchCategories = () => {
  return clientHttp
    .get<string[]>(`products/categories`)
    .then((res) => res.data);
};

export const useFetchProduct = (id: number) => {
  return useQuery([`product/${id}`], () =>
    clientHttp.get<Product>(`products/${id}`).then((res) => res.data)
  );
};

export const fetchCarts = () => {
  return clientHttp.get<Cart[]>("carts").then((res) => res.data);
};

export const fetchCart = (cartId: number) => {
  return clientHttp.get<Cart>(`carts/${cartId}`).then((res) => res.data);
};
