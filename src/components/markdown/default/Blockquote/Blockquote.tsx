import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Paragraph from '../Paragraph';

const StyledBlockquote = styled.blockquote`
  margin: 3rem 0 3rem -2rem;
  padding: 0 2rem;
  border-left: 0.25em solid ${({ theme }) => theme.border};

  ${Paragraph} {
    color: ${({ theme }) => theme.mutedText};
  }

  & > :first-child {
    margin-top: 0;
  }

  & > :last-child {
    margin-bottom: 0;
  }
`;

const Blockquote: FunctionComponent = ({ children, ...rest }) => (
  <StyledBlockquote {...rest}>{children}</StyledBlockquote>
);

export default Blockquote;
