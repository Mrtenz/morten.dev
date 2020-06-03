import styled, { css, CSSObject } from 'styled-components';

interface Props {
  open: boolean;
  variant: 'top' | 'middle' | 'bottom';
}

/*
.attrs({
  vectorEffect: 'non-scaling-stroke',
  initial: 'closed',
  transition: {
    ease: 'easeOut',
    duration: 0.2
  }
})
 */

const VARIANTS: { [key in 'top' | 'middle' | 'bottom']: CSSObject } = {
  top: {
    transform: 'rotate(45deg) translateY(0px)'
  },
  middle: {
    opacity: 0
  },
  bottom: {
    transform: 'rotate(-45deg) translateX(-3px) translateY(-0.8px)'
  }
};

const Line = styled.line<Props>`
  vector-effect: non-scaling-stroke;
  stroke: ${({ theme }) => theme.secondary};
  stroke-width: 0.5rem;
  transform: rotate(0) translateY(0);
  opacity: 1;
  transition: 0.2s ease-out;

  ${({ open, variant }) => open && css(VARIANTS[variant])}
`;

export default Line;
