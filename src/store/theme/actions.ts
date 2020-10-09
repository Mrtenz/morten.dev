import { createAction } from '@reduxjs/toolkit';
import { Theme } from '../../theme';

export const setTheme = createAction<Theme>('theme/setTheme');
