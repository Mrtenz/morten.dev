import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  disabled?: boolean;
  onClick?(): void;
}

const ButtonContainer = styled.button`
  background: none;
  color: ${({ theme }) => theme.text};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 1.6rem;
  border: 0.2rem solid ${({ theme }) => theme.text};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: none;
  cursor: pointer;
  padding: 1rem 2rem;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.8;
    `};
`;

const Button: FunctionComponent<Props> = ({ disabled = false, onClick, children }) => (
  <ButtonContainer disabled={disabled} onClick={onClick}>
    {children}
  </ButtonContainer>
);

export default Button;
