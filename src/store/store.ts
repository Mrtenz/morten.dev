import { configureStore, EnhancedStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';
import { ThemeState } from './theme';

export interface ApplicationState {
  theme: ThemeState;
}

export type ApplicationDispatch = ReturnType<typeof createStore>['dispatch'];

export const createStore = (preloadedState?: ApplicationState): EnhancedStore<ApplicationState> => {
  return configureStore({
    reducer,
    middleware: getDefaultMiddleware(),
    preloadedState
  });
};

// Default export for `gatsby-plugin-react-redux`
export default createStore;
