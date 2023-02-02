import { combineReducers } from 'redux';

import query from './query';
import display from './display';

export default combineReducers({
  query,
  display
});
