import { motion } from 'framer-motion';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Line from './Line';

interface Props {
  isOpen: boolean;

  onClick(): void;
}

const HamburgerSvg = styled(motion.svg)`
  cursor: pointer;
`;

const TOP_VARIANT = {
  closed: {
    rotate: 0,
    translateY: 0,
  },
  open: {
    rotate: 45,
    translateY: 2,
  },
};

const MIDDLE_VARIANT = {
  closed: {
    opacity: 1,
  },
  open: {
    opacity: 0,
  },
};

const BOTTOM_VARIANT = {
  closed: {
    rotate: 0,
    translateY: 0,
  },
  open: {
    rotate: -45,
    translateY: -2,
  },
};

const Hamburger: FunctionComponent<Props> = ({ isOpen, onClick }) => {
  const variant = isOpen ? 'open' : 'closed';

  return (
    <HamburgerSvg
      width="40"
      height="25"
      viewBox="0 0 6.4 4"
      overflow="visible"
      preserveAspectRatio="none"
      onClick={onClick}>
      <Line animate={variant} variants={TOP_VARIANT} x1="0" x2="6.4" y1="0" y2="0" />
      <Line animate={variant} variants={MIDDLE_VARIANT} x1="0" x2="6.4" y1="2" y2="2" />
      <Line animate={variant} variants={BOTTOM_VARIANT} x1="0" x2="6.4" y1="4" y2="4" />
    </HamburgerSvg>
  );
};

export default Hamburger;
