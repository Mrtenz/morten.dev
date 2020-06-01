import React, { FunctionComponent } from 'react';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import InputDataEncoderForm from '../../components/InputDataEncoderForm';
import MetaData from '../../components/MetaData';
import Section from '../../components/Section';
import Text from '../../components/Text';

const InputDataDecoder: FunctionComponent = () => (
  <Section>
    <MetaData />

    <Container>
      <Heading as="h1">Input Data Encoder</Heading>
      <Text>
        This is a simple encoder tool for Ethereum input data. Simply enter the contract address or contract ABI below.
      </Text>
      <InputDataEncoderForm />
    </Container>
  </Section>
);

export default InputDataDecoder;
