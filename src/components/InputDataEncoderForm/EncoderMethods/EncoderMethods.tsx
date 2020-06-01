import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useContractMethods } from '../../../hooks';
import { ABIMethod } from '../../../utils/abi';
import Heading from '../../Heading';
import Select from '../../Select';
import Text from '../../Text';

interface Props {
  contractAbi: string;

  onChange(method?: ABIMethod): void;
}

const Container = styled.div`
  margin: 5rem 0;
`;

const EncoderMethods: FunctionComponent<Props> = ({ contractAbi, onChange }) => {
  const methods = useContractMethods(contractAbi);
  const [methodIndex, setMethodIndex] = useState(0);

  const handleChange = (value: string) => {
    const index = Number(value);

    setMethodIndex(index);
    onChange(methods[index]);
  };

  useEffect(() => {
    onChange(methods[0]);
  }, [methods]);

  return (
    <Container>
      <Heading as="h2">Contract method</Heading>
      <Text>Select a method from the list below.</Text>
      <Select value={methodIndex} onChange={handleChange} disabled={methods.length === 0}>
        {methods.map((method, index) => (
          <option key={method.name} value={index}>
            {method.name}
          </option>
        ))}
      </Select>
    </Container>
  );
};

export default EncoderMethods;
