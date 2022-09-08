import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";
import { Product } from "../../models/Product";

import { useProductsStore } from "../../store/useProductStore";

type ProductProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductProps) => {
  const navigate = useNavigate();
  const { findProduct, toggleProduct } = useProductsStore();

  const hasProduct = findProduct(product);

  const goToDetail = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <Card>
      <CardActionArea onClick={goToDetail}>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.title}
          sx={{ objectFit: "contain", p: 4, boxSizing: "border-box" }}
        />
        <CardContent sx={{ borderTop: "solid 1px", borderColor: "grey.200" }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ height: 60, overflow: "hidden" }}
          >
            {product.title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {product.category}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* </Link> */}

      <CardActions
        sx={{ borderTop: "solid 1px", borderColor: "grey.200", padding: 3 }}
      >
        <Button
          onClick={() => toggleProduct(product)}
          variant="contained"
          color={hasProduct ? "error" : "primary"}
          sx={{ width: "100%" }}
        >
          {hasProduct ? "REMOVER" : "ADICIONAR"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
