import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Heading from '../Heading';
import Link from '../Link';

interface Props {
  name: string;
  url: string;
}

const Container = styled.div`
  margin: 5rem 0;
`;

const Tool: FunctionComponent<Props> = ({ name, url, children }) => (
  <Container>
    <Link to={url}>
      <Heading as="h3">{name}</Heading>
      {children}
    </Link>
  </Container>
);

export default Tool;
