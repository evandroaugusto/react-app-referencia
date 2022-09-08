import { styled } from "@mui/material";
import { Box } from "@mui/system";
import { useProductsStore } from "../../store/useProductStore";

const CartStyled = styled(Box)({
  display: "flex",
  alignSelf: "end",
  marginRight: 30,
  border: "solid 1px #ccc",
  borderRadius: 4,
  padding: "8px 12px",
});

// ----------------------------------------------------------------------

const ProductsCart = () => {
  const { selectedProducts } = useProductsStore();
  const TOTAL_PRODUCTS = selectedProducts.length;

  return <CartStyled>{TOTAL_PRODUCTS} Produto(s)</CartStyled>;
};

export default ProductsCart;
