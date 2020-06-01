import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { decodeInputData } from '../../../utils/abi';
import Heading from '../../Heading';
import Input from '../../Input';

interface Props {
  inputData: string;
  contractABI: string;
}

const Container = styled.div`
  margin: 5rem 0;
`;

const DecodedInputData: FunctionComponent<Props> = ({ inputData, contractABI }) => {
  const [decoded, setDecoded] = useState('');

  useEffect(() => {
    if (inputData && contractABI) {
      const data = decodeInputData(contractABI, inputData);
      setDecoded(JSON.stringify(data, null, 2));
    }
  }, [inputData, contractABI]);

  return (
    <Container>
      <Heading as="h2">Decoded input data</Heading>
      <Input as="textarea" value={decoded} readonly={true} />
    </Container>
  );
};

export default DecodedInputData;
