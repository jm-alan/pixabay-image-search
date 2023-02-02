import { combineReducers } from 'redux';

import search from './query';
import display from './display';

export default combineReducers({
  search,
  display
});
