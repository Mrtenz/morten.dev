import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Text from '../../../Text';

export interface Props {
  alt: string;
}

const Figure = styled.figure`
  max-width: 100%;
  box-sizing: content-box;
  margin: 1rem 0;
`;

const Caption = styled(Text).attrs({ as: 'figcaption', small: true, muted: true })`
  width: 100%;
  text-align: center;
  font-weight: 300;
`;

const StyledImage = styled.img`
  border-style: none;
  height: auto !important;
`;

const Image: FunctionComponent<Props> = ({ alt, children, ...rest }) => (
  <Figure>
    <StyledImage alt={alt} {...rest}>
      {children}
    </StyledImage>
    <Caption>{alt}</Caption>
  </Figure>
);

export default Image;
