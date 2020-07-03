import {combineReducers} from 'redux';
import wordReducer from './wordReducer';
import shouldShowFormReducer from './shouldShowFormReducer';
import filterModeReducer from './filterModeReducer';
const reducer = combineReducers({
  words: wordReducer,
  shouldShowForm: shouldShowFormReducer,
  filterMode: filterModeReducer,
});

export default reducer;
