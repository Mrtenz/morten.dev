import { HumanReadableTransaction, readTransactionByHash, readTransactionBySignature } from 'hmet';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { ETHERS_PROVIDER } from '../../utils/ethereum';
import Input from '../Input';
import Text from '../Text';
import DecodedTransaction from './DecodedTransaction';

const TransactionDecoderForm: FunctionComponent = () => {
  const [transactionHash, setTransactionHash] = useState('');
  const [signedTransaction, setSignedTransaction] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const [transaction, setTransaction] = useState<HumanReadableTransaction>();

  useEffect(() => {
    if (transactionHash) {
      setLoading(true);

      // @ts-expect-error Dependency incompatibility
      readTransactionByHash(transactionHash, ETHERS_PROVIDER)
        .then(setTransaction)
        // eslint-disable-next-line no-console
        .catch(console.error)
        .finally(() => setLoading(false));
      return;
    }

    if (signedTransaction) {
      setLoading(true);

      // @ts-expect-error Dependency incompatibility
      readTransactionBySignature(signedTransaction, ETHERS_PROVIDER)
        .then(setTransaction)
        // eslint-disable-next-line no-console
        .catch(console.error)
        .finally(() => setLoading(false));
      return;
    }
  }, [transactionHash, signedTransaction]);

  return (
    <>
      <Input label="Transaction hash" value={transactionHash} onChange={setTransactionHash} disabled={loading} />
      <Text small={true}>Or</Text>
      <Input label="Signed transaction" value={signedTransaction} onChange={setSignedTransaction} disabled={loading} />

      <DecodedTransaction transaction={transaction} />
    </>
  );
};

export default TransactionDecoderForm;
