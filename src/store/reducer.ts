import { combineReducers } from 'redux';
import { ApplicationState } from './store';
import theme from './theme';

const reducer = combineReducers<ApplicationState>({
  theme
});

export default reducer;
