import React, { FunctionComponent, useContext } from 'react';
import styled from 'styled-components';
import { Theme } from '../../theme';
import Icon from '../Icon';
import { ThemeContext } from './ThemeContext';

const ThemeSwitchContainer = styled.div`
  position: fixed;
  top: 5rem;
  right: 5rem;
  z-index: 100;
  cursor: pointer;
`;

const ThemeSwitch: FunctionComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    if (theme === Theme.DARK) {
      return setTheme(Theme.LIGHT);
    }

    setTheme(Theme.DARK);
  };

  return (
    <ThemeSwitchContainer onClick={handleClick}>
      <Icon icon="theme" />
    </ThemeSwitchContainer>
  );
};

export default ThemeSwitch;
