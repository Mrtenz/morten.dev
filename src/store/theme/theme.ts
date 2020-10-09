import { Theme } from '../../theme';

export interface ThemeState {
  theme: Theme;
}

export const INITIAL_STATE: ThemeState = {
  theme: Theme.DARK
};
