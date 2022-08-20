import { Button } from '@mui/material';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background: #155da4;
  display: flex;
  align-items: center;
  height: 80px;
  padding: 30px;
  justify-content: center;
  position: relative;

  h1 {
    color: #fff;
  }
`;

export const LogoutBtn = styled(Button)`
  && {
    position: absolute;
    right: 10px;
    bottom: 10px;
    color: #fff;
  }
`;
