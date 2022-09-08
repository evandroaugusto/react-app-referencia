import { Box, Button, Container, Typography } from "@mui/material";

import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../../../shared/components/Loading";
import { useFetchProduct } from "../../api/products.api";

import * as s from "./styles";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: product, isLoading } = useFetchProduct(Number(id));

  const handleBack = () => {
    navigate("/products/list");
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container sx={{ paddingTop: 4 }}>
      <Box sx={{ display: "flex" }}>
        <Box
          component="div"
          sx={{
            borderRadius: 1,
            backgroundColor: "#fff",
            border: "solid 1px #e8e8e8",
            padding: 5,
            alignSelf: "flex-start",
          }}
          width="35%"
        >
          <img src={product?.image} alt={product?.title} width="100%" />
        </Box>

        {/* Sobre o produto */}
        <Box pl={5} width="65%">
          <Typography variant="h4" component="h4" paragraph>
            {product?.title}
          </Typography>

          <Typography component="h5" paragraph>
            <s.Category>{product?.category}</s.Category>
          </Typography>

          <Typography gutterBottom>{product?.description}</Typography>

          <Box height={40} />

          <Typography variant="h4" component="h4" paragraph>
            Descrição técnica
          </Typography>

          <Typography component="p">
            Quisque sed tortor posuere, vulputate lacus ut, dapibus sem. In et
            sem lobortis, volutpat est ut, luctus ligula. Nam quis dolor tempus,
            pellentesque arcu quis, sollicitudin nunc. Nullam mollis facilisis
            massa, vel dapibus felis cursus eu. Praesent euismod pulvinar nibh
            ut tristique. Etiam sit amet est eleifend, blandit dolor et,
            ultricies velit. Quisque non lorem ornare, commodo nibh ac, blandit
            orci. Fusce nec fringilla erat. Pellentesque tincidunt odio eu eros
            congue, elementum consectetur orci vulputate. Duis quis neque odio.
          </Typography>

          <Box height={40} />

          <Button variant="outlined" onClick={handleBack}>
            Voltar
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductDetailPage;
