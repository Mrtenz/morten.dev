import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import Link from '../Link';

const SocialsWrapper = styled.footer`
  position: absolute;
  bottom: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    margin: 0 1rem;
  }
`;

const Socials: FunctionComponent = () => (
  <SocialsWrapper>
    <section>
      <Link external={true} to="https://github.com/Mrtenz">
        <Icon icon="github" />
      </Link>
      <Link external={true} to="mailto:maarten@zuidhoorn.com">
        <Icon icon="email" />
      </Link>
    </section>
  </SocialsWrapper>
);

export default Socials;
