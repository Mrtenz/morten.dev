import styled from 'styled-components';

export interface Props {
  muted?: boolean;
  small?: boolean;
  inherit?: boolean;
}

const Text = styled.p<Props>`
  color: ${({ theme, muted }) => (muted ? theme.mutedText : theme.text)};
  font-family: ${({ theme, inherit }) => (inherit ? 'inherit' : theme.fontFamily)};
  font-size: ${({ small, inherit }) => (inherit ? 'inherit' : small ? '1.3rem' : '1.8rem')};
  line-height: 1.6;
  margin: 1.8rem 0;
`;

export default Text;
