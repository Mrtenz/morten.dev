import { serialize } from '@ethersproject/transactions';
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
    const { transaction: rawTransaction, ...rest } = transaction;
    const { v, r, s, from, hash, ...unsignedTransaction } = rawTransaction;

    const signedTransaction = serialize(unsignedTransaction, { v, r: r!, s });

    return (
      <Container>
        <Heading as="h2">Decoded transaction</Heading>
        {rest.description && <Text>{rest.description}</Text>}
        <Input
          as="textarea"
          value={JSON.stringify(
            {
              ...rest,
              rawTransaction,
              signedTransaction
            },
            null,
            2
          )}
          readonly={true}
        />
      </Container>
    );
  }

  return null;
};

export default DecodedTransaction;
