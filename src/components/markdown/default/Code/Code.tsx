import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledCode = styled.code`
  display: block;
  color: ${({ theme }) => theme.text};
  font-size: 1.4rem;
  font-family: ${({ theme }) => theme.monoFontFamily};
  background: ${({ theme }) => theme.codeBackground};
  padding: 1.6em;
  overflow: auto;
  margin: 3rem 0;
`;

const Code: FunctionComponent = ({ children, ...rest }) => <StyledCode {...rest}>{children}</StyledCode>;

export default Code;
