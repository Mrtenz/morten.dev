import { configureStore, EnhancedStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';
import { ThemeState } from './theme';

export interface ApplicationState {
  theme: ThemeState;
}

export type ApplicationDispatch = ReturnType<typeof createStore>['dispatch'];

export const createStore = (preloadedState?: ApplicationState): EnhancedStore<ApplicationState> => {
  const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware(),
    preloadedState
  });

  store.subscribe(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const state = store.getState();
      window.localStorage.setItem('redux', JSON.stringify(state));
    }
  });

  return store;
};

// Default export for `gatsby-plugin-react-redux`
export default createStore;
