import { createReducer } from '@reduxjs/toolkit';
import { setTheme } from './actions';
import { INITIAL_STATE, ThemeState } from './theme';

export default createReducer<ThemeState>(INITIAL_STATE, (builder) =>
  builder.addCase(setTheme, (state, action) => {
    return {
      ...state,
      theme: action.payload
    };
  })
);
