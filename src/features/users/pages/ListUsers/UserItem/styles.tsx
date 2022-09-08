import { Paper, styled } from "@mui/material";

export const Container = styled("div")({});

export const Card = styled(Paper)`
  display: flex;
  align-items: center;
  min-height: 120px;
  padding: 30px;

  @media (max-width: 1200px) {
    flex-direction: column;

    h3 {
      margin-top: 20px;
    }
  }

  img {
    background: #f1f1f1;
  }
`;
