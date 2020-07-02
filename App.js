import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import List from './src/components/List';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const defaultWords = [
  {id: 1, en: 'One', vn: 'Mot', isMemorized: true},
  {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
  {id: 3, en: 'Three', vn: 'Ba', isMemorized: false},
  {id: 4, en: 'Four', vn: 'Bon', isMemorized: false},
  {id: 5, en: 'Five', vn: 'Nam', isMemorized: true},
];

function wordReducer(state = defaultWords, action) {
  switch (action.type) {
    case 'ADD_WORD':
      const newWordsAdd = [...state];
      const newWordAdd = {
        id: state.length + 1,
        en: action.en,
        vn: action.vn,
        isMemorized: false,
      };
      newWordsAdd.unshift(newWordAdd);
      return newWordsAdd;

    case 'TOGGLE_MEMORIZED':
      const newWordsToggleMemorized = state.map(word => {
        if (word.id === action.id) {
          const newWordToggleMemorized = {
            ...word,
            isMemorized: !word.isMemorized,
          };
          return newWordToggleMemorized;
        }
        return word;
      });
      return newWordsToggleMemorized;

    case 'REMOVE':
      const newWordsRemove = state.filter(word => action.id !== word.id);
      return newWordsRemove;

    default:
      return state;
  }
}

function shouldShowFormReducer(state = false, action) {
  if (action.type === 'TOGGLE_FORM' || action.type === 'ADD_WORD') {
    return !state;
  }
  return state;
}

const reducer = combineReducers({
  words: wordReducer,
  shouldShowForm: shouldShowFormReducer,
});
const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <List />
        </Provider>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
