import { motion } from 'framer-motion';
import styled from 'styled-components';

const Line = styled(motion.line).attrs({
  vectorEffect: 'non-scaling-stroke',
  initial: 'closed',
  transition: {
    ease: 'easeOut',
    duration: 0.2,
  },
})`
  stroke: ${({ theme }) => theme.secondary};
  stroke-width: 0.5rem;
`;

export default Line;
