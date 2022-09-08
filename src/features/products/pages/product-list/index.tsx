import { Box, Container, Grid, Typography } from "@mui/material";
import { ReactNode, useCallback, useEffect, useState } from "react";
import Loading from "../../../../shared/components/Loading";

import ProductCard from "../../components/product-card";

import SearchProductForm from "./SearchProductForm";
import useProductList from "./useProductList";
import useSearchProducts from "./useSearchProducts";

const ProductListPage = () => {
  const { products, categories, isLoading } = useProductList();
  const { filteredProducts, searchProduct } = useSearchProducts(products);

  const onSearchHandle = useCallback(
    (searchTerm: string, categoryTerm: string) => {
      searchProduct(searchTerm, categoryTerm);
    },
    [searchProduct]
  );

  const RenderSearchResult = ({ children }: { children: ReactNode }) => {
    return (
      <>
        {!filteredProducts.length ? (
          <Box
            sx={{
              textAlign: "center",
              border: "solid 1px #efefef",
              borderRadius: 1,
              padding: 10,
            }}
          >
            Não há produtos para esta consulta
          </Box>
        ) : (
          children
        )}
      </>
    );
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <Typography variant="h3" component="h1" paragraph>
        Produtos
      </Typography>

      <SearchProductForm categories={categories} onSearch={onSearchHandle} />

      <RenderSearchResult>
        <Grid
          container
          spacing={4}
          rowSpacing={4}
          columns={{ xs: 1, sm: 2, md: 4 }}
        >
          {filteredProducts?.map((product) => {
            return (
              <Grid xs={1} item key={product.id}>
                <ProductCard product={product} />
              </Grid>
            );
          })}
        </Grid>
      </RenderSearchResult>
    </Container>
  );
};

export default ProductListPage;
