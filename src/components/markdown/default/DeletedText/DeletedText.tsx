import React, { FunctionComponent } from 'react';
import Text from '../../../Text';

const DeletedText: FunctionComponent = ({ children, ...rest }) => (
  <Text as="del" inherit={true} {...rest}>
    {children}
  </Text>
);

export default DeletedText;
