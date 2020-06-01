import styled from 'styled-components';
import Text from '../../../Text';

const Paragraph = styled(Text)`
  margin: 3rem 0;
  font-size: 2rem !important;
  font-family: ${({ theme }) => theme.contentFontFamily};
  letter-spacing: 0.4px;
  word-break: break-word;
`;

export default Paragraph;
