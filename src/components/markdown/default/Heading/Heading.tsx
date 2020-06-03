import styled from 'styled-components';
import BaseHeading from '../../../Heading';

type Size = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const sizes: { [key in Size]: string } = {
  h1: '3.4rem',
  h2: '3.2rem',
  h3: '2.2rem',
  h4: '1.7rem',
  h5: '1.5rem',
  h6: '1.3rem'
};

interface Props {
  as: Size;
}

const Heading = styled(BaseHeading)<Props>`
  font-size: ${({ as }: Props) => sizes[as]};
  margin: 6.5rem 0 1.8rem 0;
`;

export default Heading;
