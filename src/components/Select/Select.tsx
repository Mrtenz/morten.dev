import React, { ChangeEvent, FunctionComponent } from 'react';
import styled from 'styled-components';
import Text from '../Text';

interface Props {
  label?: string;
  value: string | number;
  className?: string;
  disabled?: boolean;
  readonly?: boolean;

  onChange?(value: string): void;
}

const InputLabel = styled(Text).attrs({ as: 'label' })`
  display: block;
  font-size: 1.5rem;
`;

const StyledInput = styled.select`
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
`;

const Select: FunctionComponent<Props> = ({ label, onChange, children, ...rest }) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => onChange && onChange(event.target.value);

  return (
    <InputLabel>
      {label}
      <StyledInput onChange={handleChange} {...rest}>
        {children}
      </StyledInput>
    </InputLabel>
  );
};

export default Select;
