import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ABIMethod } from '../../../utils/abi';
import Heading from '../../Heading';
import Input from '../../Input';
import Text from '../../Text';

interface Props {
  method?: ABIMethod;

  onChange(data: { [key: string]: string }): void;
}

const Container = styled.div`
  margin: 5rem 0;
`;

const EncoderParameters: FunctionComponent<Props> = ({ method, onChange }) => {
  const [data, setData] = useState<{ [key: string]: string }>({});

  const handleChange = (value: string, name: string) => {
    setData((state) => ({ ...state, [name]: value }));
  };

  useEffect(() => {
    onChange(data);
  }, [data]);

  return (
    <Container>
      <Heading as="h2">Method parameters</Heading>
      <Text>Fill out the method parameters below.</Text>
      {method?.inputs.map((input) => (
        <Input
          key={input.name}
          label={`${input.name} (${input.type})`}
          name={input.name}
          value={data[input.name] || ''}
          onChange={handleChange}
        />
      ))}
    </Container>
  );
};

export default EncoderParameters;
