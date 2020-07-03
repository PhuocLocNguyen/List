import {combineReducers} from 'redux';
import wordReducer from './wordReducer';
import shouldShowFormReducer from './shouldShowFormReducer';

const reducer = combineReducers({
  words: wordReducer,
  shouldShowForm: shouldShowFormReducer,
});

export default reducer;
