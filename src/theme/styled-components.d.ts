import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    background: string;
    codeBackground: string;
    inputBackground: string;
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

    syntax: {
      builtin: string;
      className: string;
      comment: string;
      function: string;
      keyword: string;
      number: string;
      operator: string;
      property: string;
      punctuation: string;
      string: string;
      text: string;
      version: string;
    };
  }
}
