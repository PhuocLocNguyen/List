import reducer from './reducer';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(ReduxThunk));

export default store;
