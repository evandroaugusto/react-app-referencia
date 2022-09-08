import { styled } from "@mui/material";

export const Error = styled("span")({
  display: "block",
  color: "red",
  fontSize: 14,
  margin: "8px 0 8px 0",
});

export const ErrorWrapper = styled(Error)({
  backgroundColor: "red",
});
