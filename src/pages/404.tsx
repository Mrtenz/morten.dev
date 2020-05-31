import React, { FunctionComponent } from 'react';
import Center from '../components/Center';
import Heading from '../components/Heading';
import MetaData from '../components/MetaData';
import Section from '../components/Section';

const NotFound: FunctionComponent = () => (
  <Section>
    <MetaData />

    <Center>
      <Heading as="h1">Not Found</Heading>
    </Center>
  </Section>
);

export default NotFound;
