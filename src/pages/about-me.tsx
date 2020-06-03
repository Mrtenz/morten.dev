import React, { FunctionComponent } from 'react';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Link from '../components/Link';
import MetaData from '../components/MetaData';
import Section from '../components/Section';
import Text from '../components/Text';

const AboutMe: FunctionComponent = () => (
  <Section>
    <MetaData title="About Me" />

    <Container>
      <Heading as="h1">About Me</Heading>
      <Text>
        Hi, I'm an Ethereum-enthusiast and full-stack web developer with over 10 years of experience in multiple
        programming languages (most notably, TypeScript, C#, and Java).
      </Text>
      <Text>
        To see some projects I have worked on, please refer to my{' '}
        <Link external={true} to="https://github.com/Mrtenz">
          GitHub
        </Link>{' '}
        profile.
      </Text>
    </Container>
  </Section>
);

export default AboutMe;
