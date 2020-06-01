import React, { ChangeEvent, FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import Text from '../Text';

interface Props {
  as?: 'textarea';
  name?: string;
  label?: string;
  value: string;
  className?: string;
  disabled?: boolean;
  readonly?: boolean;

  onChange?(value: string, name?: string): void;
}

const InputLabel = styled(Text).attrs({ as: 'label' })`
  display: block;
  font-size: 1.5rem;
`;

interface StyledInputProps {
  as?: 'textarea';
}

const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  border: none;
  outline: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1rem 1.5rem;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fontFamily};
  background: ${({ theme }) => theme.inputBackground};

  :disabled {
    background: ${({ theme }) => theme.mutedText};
  }

  ${({ as }) =>
    as === 'textarea' &&
    css`
      resize: vertical;
      min-height: 25rem;
    `};
`;

const Input: FunctionComponent<Props> = ({ label, onChange, ...rest }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    onChange && onChange(event.target.value, event.target.name);

  return (
    <InputLabel>
      {label}
      <StyledInput onChange={handleChange} {...rest} />
    </InputLabel>
  );
};

export default Input;
