import { GatsbyBrowser } from 'gatsby';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'typeface-public-sans';
import 'typeface-source-serif-pro';
import 'typeface-source-code-pro';
import theme from '../src/theme';

/**
 * Wraps the root with providers.
 */
export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);
