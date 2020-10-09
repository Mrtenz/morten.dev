import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import { useSelector } from '../../utils/hooks';

const Providers: FunctionComponent = ({ children }) => {
  const { theme: currentTheme } = useSelector((state) => state.theme);

  return <ThemeProvider theme={theme[currentTheme]}>{children}</ThemeProvider>;
};

export default Providers;
