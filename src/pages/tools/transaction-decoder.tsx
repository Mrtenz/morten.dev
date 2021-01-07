import React, { FunctionComponent } from 'react';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import MetaData from '../../components/MetaData';
import Section from '../../components/Section';
import Text from '../../components/Text';
import TransactionDecoderForm from '../../components/TransactionDecoderForm';

const TransactionDecoder: FunctionComponent = () => (
  <Section>
    <MetaData title="Transaction Decoder" description="A tool to parse transactions in a human-readable way." />

    <Container>
      <Heading as="h1">Transaction Decoder</Heading>
      <Text>
        This is an experimental tool to parse signed transactions or transaction hashes to a human-readable description.
        Simply enter a transaction hash or signed transaction below.
      </Text>
      <Text muted={true}>Currently only ERC-20 token transfers and approvals are supported.</Text>
      <TransactionDecoderForm />
    </Container>
  </Section>
);

export default TransactionDecoder;
