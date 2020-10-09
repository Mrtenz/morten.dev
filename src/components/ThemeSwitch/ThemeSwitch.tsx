import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { setTheme } from '../../store/theme';
import { Theme } from '../../theme';
import { useDispatch, useSelector } from '../../utils/hooks';
import Icon from '../Icon';

const ThemeSwitchContainer = styled.div`
  position: fixed;
  top: 5rem;
  right: 5rem;
  z-index: 100;
  cursor: pointer;
`;

const ThemeSwitch: FunctionComponent = () => {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (theme === Theme.DARK) {
      return dispatch(setTheme(Theme.LIGHT));
    }

    return dispatch(setTheme(Theme.DARK));
  };

  return (
    <ThemeSwitchContainer onClick={handleClick}>
      <Icon icon="theme" />
    </ThemeSwitchContainer>
  );
};

export default ThemeSwitch;
