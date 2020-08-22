import React, { FunctionComponent } from 'react';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import Link from '../../components/Link';
import MetaData from '../../components/MetaData';
import Section from '../../components/Section';
import SignatureVerifierForm from '../../components/SignatureVerifierForm';
import Text from '../../components/Text';

const SignatureVerifier: FunctionComponent = () => (
  <Section>
    <MetaData title="Signature Verifier" description="A tool to verify Ethereum ECDSA signatures." />

    <Container>
      <Heading as="h1">Signature Verifier</Heading>
      <Text>
        This is a tool to verify Ethereum ECDSA signatures using Solidity. The smart contract used for this tool can be
        found{' '}
        <Link to="https://etherscan.io/address/0xcf3c059a249183a07a9dd9d4cb88e1a93e7311e0#code" external={true}>
          here
        </Link>
        .
      </Text>
      <SignatureVerifierForm />
    </Container>
  </Section>
);

export default SignatureVerifier;
