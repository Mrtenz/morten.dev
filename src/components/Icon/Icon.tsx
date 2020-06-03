import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import email from '../../assets/images/email.svg';
import github from '../../assets/images/github.svg';

export const icons = {
  email: {
    name: 'Email',
    icon: email
  },
  github: {
    name: 'GitHub',
    icon: github
  }
};

interface Props {
  icon: keyof typeof icons;
}

export const StyledIcon = styled.img`
  width: 3.5rem;
  vertical-align: middle;
`;

const Icon: FunctionComponent<Props> = ({ icon }) => <StyledIcon src={icons[icon].icon} alt={icons[icon].name} />;

export default Icon;
