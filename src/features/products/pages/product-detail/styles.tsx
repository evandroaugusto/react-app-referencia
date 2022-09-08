import { styled } from "@mui/material";

const Category = styled("label")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.default,
  fontSize: 14,
  borderRadius: 4,
  padding: 6,
  paddingLeft: 12,
  paddingRight: 12,
  "&:hover": {
    opacity: 0.6,
    cursor: "pointer",
  },
}));

export { Category };
