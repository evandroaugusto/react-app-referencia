import { styled } from "@mui/material";

export const Container = styled("div")({
  boxShadow: "0 10px 20px rgb(0 0 0 / 19 %), 0 6px",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  maxWidth: "1300px",
});

export const Main = styled("main")({
  border: "solid 1px #f0f0f0",
  display: "flex",
  flexDirection: "column",
  flex: "1 0 auto",
  padding: 50,
});
