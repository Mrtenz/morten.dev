import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    background: string;
    codeBackground: string;
    text: string;
    mutedText: string;
    border: string;

    borderRadius: string;

    fontFamily: string;
    contentFontFamily: string;
    monoFontFamily: string;

    smallBoxShadow: string;

    logo: {
      fill: string;
      shadow: string;
    };
  }
}
