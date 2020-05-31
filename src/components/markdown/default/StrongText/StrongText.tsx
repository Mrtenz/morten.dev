import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Text from '../../../Text';

const StyledStrongText = styled(Text)`
  font-weight: bold;
`;

const StrongText: FunctionComponent = ({ children, ...rest }) => (
  <StyledStrongText as="strong" inherit={true} {...rest}>
    {children}
  </StyledStrongText>
);

export default StrongText;
