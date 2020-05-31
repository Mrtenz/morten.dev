import React, { FunctionComponent } from 'react';
import Text from '../../../Text';

const EmphasizedText: FunctionComponent = ({ children, ...rest }) => (
  <Text as="em" inherit={true} {...rest}>
    {children}
  </Text>
);

export default EmphasizedText;
