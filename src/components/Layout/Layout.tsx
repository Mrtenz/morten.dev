import React, { FunctionComponent } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Navigation from '../Navigation';
import Providers from '../Providers';
import ThemeSwitch from '../ThemeSwitch';

const GlobalStyle = createGlobalStyle`
  html, body, #___gatsby {
    margin: 0;
    height: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    font-size: 1.45rem;
    overflow-y: scroll;
  }
`;

const LayoutWrapper = styled.div`
  height: 100vh;
`;

const Layout: FunctionComponent = ({ children }) => (
  <Providers>
    <LayoutWrapper>
      <GlobalStyle />
      <Navigation />
      <ThemeSwitch />
      {children}
    </LayoutWrapper>
  </Providers>
);

export default Layout;
