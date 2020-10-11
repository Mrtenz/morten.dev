import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Highlighter from '../../../Highlighter';

const StyledCode = styled.code`
  display: block;
  color: ${({ theme }) => theme.text};
  font-size: 1.4rem;
  font-family: ${({ theme }) => theme.monoFontFamily};
  background: ${({ theme }) => theme.codeBackground};
  padding: 1.6em;
  margin: 3rem 0;
  overflow-x: auto;
`;

interface Props {
  children: string;
  className?: string;
}

const Code: FunctionComponent<Props> = ({ children, className }) => {
  if (className) {
    const match = className.match(/^language-(.*)$/);
    if (match) {
      const language = match[1];

      return (
        <StyledCode>
          <Highlighter language={language}>{children}</Highlighter>
        </StyledCode>
      );
    }
  }

  return <StyledCode>{children}</StyledCode>;
};

export default Code;
