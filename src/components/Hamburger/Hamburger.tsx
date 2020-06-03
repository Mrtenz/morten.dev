import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Line from './Line';

interface Props {
  isOpen: boolean;

  onClick(): void;
}

const HamburgerSvg = styled.svg`
  cursor: pointer;
`;

const Hamburger: FunctionComponent<Props> = ({ isOpen, onClick }) => (
  <HamburgerSvg
    width="40"
    height="25"
    viewBox="0 0 6.4 4"
    overflow="visible"
    preserveAspectRatio="none"
    onClick={onClick}>
    <Line variant="top" x1="0" x2="6.4" y1="0" y2="0" open={isOpen} />
    <Line variant="middle" x1="0" x2="6.4" y1="2" y2="2" open={isOpen} />
    <Line variant="bottom" x1="0" x2="6.4" y1="4" y2="4" open={isOpen} />
  </HamburgerSvg>
);

export default Hamburger;
