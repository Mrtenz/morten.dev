import React, { FunctionComponent } from 'react';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import MetaData from '../../components/MetaData';
import Section from '../../components/Section';
import Text from '../../components/Text';
import Tool from '../../components/Tool';

const InputDataDecoder: FunctionComponent = () => (
  <Section>
    <MetaData title="Tools" description="A collection of useful tools." />

    <Container>
      <Heading as="h1">Tools</Heading>
      <Text>This is a collection of useful tools I made.</Text>

      <Tool name="Input Data Encoder" url="/tools/input-data-encoder">
        <Text>A simple tool to encode input data for Ethereum transactions.</Text>
      </Tool>

      <Tool name="Input Data Decoder" url="/tools/input-data-decoder">
        <Text>A simple tool to decode input data for Ethereum transactions.</Text>
      </Tool>
    </Container>
  </Section>
);

export default InputDataDecoder;
