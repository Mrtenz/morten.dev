import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ABIMethod, encodeInputData } from '../../../utils/abi';
import Heading from '../../Heading';
import Input from '../../Input';

interface Props {
  method?: ABIMethod;
  data?: { [key: string]: string };
}

const Container = styled.div`
  margin: 5rem 0;
`;

const EncodedInputData: FunctionComponent<Props> = ({ method, data }) => {
  const [inputData, setInputData] = useState('');

  useEffect(() => {
    setInputData('');

    if (method && data) {
      try {
        setInputData(encodeInputData(method, data));
      } catch (error) {
        // noop
      }
    }
  }, [method, data]);

  return (
    <Container>
      <Heading as="h2">Encoded input data</Heading>
      <Input as="textarea" value={inputData} readonly={true} />
    </Container>
  );
};

export default EncodedInputData;
