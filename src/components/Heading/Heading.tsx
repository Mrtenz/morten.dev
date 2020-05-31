import styled from 'styled-components';
import Text from '../Text';

type Size = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const sizes: { [key in Size]: string } = {
  h1: '4.6rem',
  h2: '4rem',
  h3: '2.5rem',
  h4: '2.8rem',
  h5: '2.2rem',
  h6: '1.6rem',
};

export interface Props {
  as: Size;
}

const Heading = styled(Text)<Props>`
  margin: 1rem 0 2.5rem 0;
  font-size: ${({ as = 'h1' }) => sizes[as]};
  line-height: 1 !important;
`;

export default Heading;
