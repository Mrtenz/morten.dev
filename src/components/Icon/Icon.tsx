import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import email from '../../assets/icons/email.svg';
import github from '../../assets/icons/github.svg';
import theme from '../../assets/icons/theme.svg';

export const icons = {
  email: {
    name: 'Email',
    Component: email
  },
  github: {
    name: 'GitHub',
    Component: github
  },
  theme: {
    name: 'Change Theme',
    Component: theme
  }
};

interface Props {
  icon: keyof typeof icons;
}

export const IconContainer = styled.div`
  width: 3.5rem;
  vertical-align: middle;

  svg {
    width: 3.5rem;
    height: 3.5rem;
    fill: ${({ theme }) => theme.secondary};
  }
`;

const Icon: FunctionComponent<Props> = ({ icon }) => {
  const Component = icons[icon].Component;

  return (
    <IconContainer>
      <Component />
    </IconContainer>
  );
};

export default Icon;
