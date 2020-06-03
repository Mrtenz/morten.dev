import { Link as GLink } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  to: string;
  external?: boolean;
}

const linkStyles = css`
  color: inherit;
  font-family: ${({ theme }) => theme.fontFamily};
  text-decoration: none;
`;

const InternalLink = styled(GLink)`
  ${linkStyles};
`;

const ExternalLink = styled(OutboundLink)`
  ${linkStyles};
`;

const Link: FunctionComponent<Props> = ({ to, external, children }) => {
  if (external) {
    return (
      <ExternalLink href={to} rel="noopener noreferrer">
        {children}
      </ExternalLink>
    );
  }

  return <InternalLink to={to}>{children}</InternalLink>;
};

export default Link;
