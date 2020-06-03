import React, { FunctionComponent } from 'react';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import InputDataDecoderForm from '../../components/InputDataDecoderForm';
import MetaData from '../../components/MetaData';
import Section from '../../components/Section';
import Text from '../../components/Text';

const InputDataDecoder: FunctionComponent = () => (
  <Section>
    <MetaData title="Input Data Decoder" description="A simple tool to decode input data for Ethereum transactions." />

    <Container>
      <Heading as="h1">Input Data Decoder</Heading>
      <Text>
        This is a simple decoder tool for Ethereum input data. Simply enter the transaction hash, contract address, or
        contract ABI below, and enter the input data you want to decode.
      </Text>
      <InputDataDecoderForm />
    </Container>
  </Section>
);

export default InputDataDecoder;
