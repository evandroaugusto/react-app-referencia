import React from 'react';
import Header from './header/Header';
import * as s from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <s.Container>
      <Header />

      <s.Main>{children}</s.Main>
    </s.Container>
  );
};

export default Layout;
