import { HumanReadableTransaction } from 'hmet';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Heading from '../../Heading';
import Input from '../../Input';
import Text from '../../Text';

interface Props {
  transaction?: HumanReadableTransaction;
}

const Container = styled.div`
  margin: 5rem 0;
`;

const DecodedTransaction: FunctionComponent<Props> = ({ transaction }) => {
  if (transaction) {
    const { transaction: _, ...rest } = transaction;

    return (
      <Container>
        <Heading as="h2">Decoded transaction</Heading>
        {rest.description && <Text>{rest.description}</Text>}
        <Input as="textarea" value={JSON.stringify(rest, null, 2)} readonly={true} />
      </Container>
    );
  }

  return null;
};

export default DecodedTransaction;
