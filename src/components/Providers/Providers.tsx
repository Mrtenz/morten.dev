import React, { FunctionComponent, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { ApplicationState, setTheme } from '../../store';
import theme from '../../theme';
import { useDispatch, useSelector } from '../../utils/hooks';

const Providers: FunctionComponent = ({ children }) => {
  const { theme: currentTheme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const state = localStorage.getItem('redux');
      if (state) {
        const { theme } = JSON.parse(state) as ApplicationState;
        dispatch(setTheme(theme.theme));
      }
    }
  }, []);

  return <ThemeProvider theme={theme[currentTheme]}>{children}</ThemeProvider>;
};

export default Providers;
