import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import Highlighter from '../../../Highlighter';

interface StyledCodeProps {
  wrap: boolean;
}

const StyledCode = styled.code<StyledCodeProps>`
  display: block;
  color: ${({ theme }) => theme.text};
  font-size: 1.4rem;
  font-family: ${({ theme }) => theme.monoFontFamily};
  background: ${({ theme }) => theme.codeBackground};
  padding: 1.6em;
  margin: 3rem 0;
  overflow-x: auto;

  ${({ wrap }) =>
    wrap &&
    css`
      overflow-x: hidden;
      word-wrap: break-word;
      white-space: pre-wrap;
    `};
`;

interface Props {
  children: string;
  wrap?: boolean;
  className?: string;
}

const Code: FunctionComponent<Props> = ({ children, className, wrap = false }) => {
  if (className) {
    const match = className.match(/^language-(.*)$/);
    if (match) {
      const language = match[1];

      return (
        <StyledCode wrap={wrap}>
          <Highlighter language={language}>{children}</Highlighter>
        </StyledCode>
      );
    }
  }

  return <StyledCode wrap={wrap}>{children}</StyledCode>;
};

export default Code;
