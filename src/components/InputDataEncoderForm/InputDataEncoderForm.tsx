import React, { FunctionComponent, useState } from 'react';
import { useContractAbi } from '../../hooks';
import { ABIMethod } from '../../utils/abi';
import Input from '../Input';
import EncodedInputData from './EncodedInputData';
import EncoderMethods from './EncoderMethods';
import EncoderParameters from './EncoderParameters';

const InputDataEncoderForm: FunctionComponent = () => {
  const [contractAddress, setContractAddress] = useState('');
  const [manualContractAbi, setManualContractAbi] = useState('');
  const [method, setMethod] = useState<ABIMethod | undefined>(undefined);
  const [data, setData] = useState<{ [key: string]: string } | undefined>(undefined);

  const { loading, contractAbi } = useContractAbi(contractAddress);

  return (
    <>
      <Input label="Contract address" value={contractAddress} onChange={setContractAddress} disabled={loading} />
      <Input
        as="textarea"
        label="Contract ABI"
        value={contractAbi ?? manualContractAbi}
        onChange={setManualContractAbi}
        disabled={loading}
        readonly={!!contractAbi}
      />

      <EncoderMethods contractAbi={contractAbi ?? manualContractAbi} onChange={setMethod} />
      <EncoderParameters method={method} onChange={setData} />
      <EncodedInputData method={method} data={data} />
      {/*<EncodedInputData inputData={transactionData?.input ?? manualInputData} contractABI={contractAbi ?? manualContractAbi}/>*/}
    </>
  );
};

export default InputDataEncoderForm;
