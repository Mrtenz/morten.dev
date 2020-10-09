import { DefaultTheme } from 'styled-components';

export enum Theme {
  LIGHT = 'LIGHT',
  DARK = 'DARK"'
}

const light: DefaultTheme = {
  primary: 'white',
  secondary: '#212121',
  background: 'white',
  codeBackground: '#eeeeee',
  inputBackground: 'white',
  text: '#212121',
  mutedText: '#747474',
  border: '#dbdbdb',

  borderRadius: '0.3rem',

  fontFamily: "'Public Sans', sans-serif",
  contentFontFamily: "'Source Serif Pro', serif",
  monoFontFamily: "'Source Code Pro', monospace",

  smallBoxShadow: '0 0.2rem 0.5rem 0 rgba(0, 0, 0, 0.5)',

  logo: {
    fill: '#212121',
    shadow: '#404040'
  }
};

const dark: DefaultTheme = {
  primary: '#212121',
  secondary: 'white',
  background: '#212121',
  codeBackground: '#313131',
  inputBackground: 'white',
  text: 'white',
  mutedText: '#c9c9c9',
  border: '#4c4c4c',

  borderRadius: '0.3rem',

  fontFamily: "'Public Sans', sans-serif",
  contentFontFamily: "'Source Serif Pro', serif",
  monoFontFamily: "'Source Code Pro', monospace",

  smallBoxShadow: '0 0.2rem 0.5rem 0 rgba(0, 0, 0, 0.5)',

  logo: {
    fill: 'white',
    shadow: '#dedede'
  }
};

export default {
  [Theme.LIGHT]: light,
  [Theme.DARK]: dark
};
