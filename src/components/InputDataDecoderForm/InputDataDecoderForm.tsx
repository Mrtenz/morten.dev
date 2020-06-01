import React, { FunctionComponent, useState } from 'react';
import { useContractAbi, useTransactionData } from '../../hooks';
import Input from '../Input';
import DecodedInputData from './DecodedInputData';

const InputDataDecoderForm: FunctionComponent = () => {
  const [transactionHash, setTransactionHash] = useState('');
  const [manualContractAddress, setManualContractAddress] = useState('');
  const [manualContractAbi, setManualContractAbi] = useState('');
  const [manualInputData, setManualInputData] = useState('');

  const { loading: transactionDataLoading, transactionData } = useTransactionData(transactionHash);
  const { loading: abiLoading, contractAbi } = useContractAbi(transactionData?.to ?? manualContractAddress);

  const loading = transactionDataLoading || abiLoading;

  return (
    <>
      <Input label="Transaction hash" value={transactionHash} onChange={setTransactionHash} disabled={loading} />
      <Input
        label="Contract address"
        value={transactionData?.to ?? manualContractAddress}
        onChange={setManualContractAddress}
        disabled={loading}
        readonly={!!transactionData?.to}
      />
      <Input
        as="textarea"
        label="Contract ABI"
        value={contractAbi ?? manualContractAbi}
        onChange={setManualContractAbi}
        disabled={loading}
        readonly={!!contractAbi}
      />
      <Input
        as="textarea"
        label="Input data"
        value={transactionData?.input ?? manualInputData}
        onChange={setManualInputData}
        disabled={loading}
        readonly={!!transactionData?.input}
      />

      <DecodedInputData
        inputData={transactionData?.input ?? manualInputData}
        contractABI={contractAbi ?? manualContractAbi}
      />
    </>
  );
};

export default InputDataDecoderForm;
