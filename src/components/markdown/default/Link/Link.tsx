import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export interface Props {
  href: string;
}

const StyledLink = styled.a`
  text-decoration: underline;
  color: ${({ theme }) => theme.text};
`;

const Link: FunctionComponent<Props> = ({ children, ...rest }) => <StyledLink {...rest}>{children}</StyledLink>;

export default Link;
