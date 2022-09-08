import React from "react";
import Header from "./header/Header";
import * as s from "./styles";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <s.Container>
        <s.Main>{children}</s.Main>
      </s.Container>
    </>
  );
};

export default Layout;
