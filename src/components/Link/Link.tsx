import { Link as GLink } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  to: string;
  external?: boolean;
  underline?: boolean;
}

interface LinkProps {
  underline?: boolean;
}

const linkStyles = css<LinkProps>`
  color: inherit;
  font-family: ${({ theme }) => theme.fontFamily};
  text-decoration: ${({ underline = false }) => (underline ? 'underline' : 'none')};
`;

const InternalLink = styled(GLink)`
  ${linkStyles};
`;

const ExternalLink = styled(OutboundLink)`
  ${linkStyles};
`;

const Link: FunctionComponent<Props> = ({ to, external, underline, children }) => {
  if (external) {
    return (
      <ExternalLink href={to} rel="noopener noreferrer" underline={underline}>
        {children}
      </ExternalLink>
    );
  }

  return (
    <InternalLink to={to} underline={underline}>
      {children}
    </InternalLink>
  );
};

export default Link;
