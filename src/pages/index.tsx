import React, { FunctionComponent } from 'react';
import Center from '../components/Center';
import Logo from '../components/Logo';
import MetaData from '../components/MetaData';
import Section from '../components/Section';

const Home: FunctionComponent = () => (
  <Section>
    <MetaData />

    <Center>
      <Logo />
    </Center>
  </Section>
);

export default Home;
