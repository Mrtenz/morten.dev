import React, { FunctionComponent, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import { ThemeContext, ThemeContextProvider } from '../ThemeSwitch';

const StyledThemeProvider: FunctionComponent = ({ children }) => {
  const { theme: currentTheme } = useContext(ThemeContext);

  return <ThemeProvider theme={theme[currentTheme]}>{children}</ThemeProvider>;
};

const Providers: FunctionComponent = ({ children }) => (
  <ThemeContextProvider>
    <StyledThemeProvider>{children}</StyledThemeProvider>
  </ThemeContextProvider>
);

export default Providers;
