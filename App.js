import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import List from './src/components/List';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

// const defaultState = {
//   words: [
//     {id: 1, en: 'One', vn: 'Mot', isMemorized: true},
//     {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
//     {id: 3, en: 'Three', vn: 'Ba', isMemorized: false},
//     {id: 4, en: 'Four', vn: 'Bon', isMemorized: false},
//     {id: 5, en: 'Five', vn: 'Nam', isMemorized: true},
//   ],
//   shouldShowForm: false,
//   filterMode: 'Show_All',
// };
// const store = createStore((state = defaultState, action) => {
//   switch (action.type) {
//     case 'TOGGLE_FORM':
//       return {...state, shouldShowForm: !state.shouldShowForm};

//     case 'ADD_WORD':
//       const newWordsAdd = [...state.words];
//       const newWordAdd = {
//         id: state.words.length + 1,
//         en: action.en,
//         vn: action.vn,
//         isMemorized: false,
//       };
//       newWordsAdd.unshift(newWordAdd);
//       return {...state, words: newWordsAdd, shouldShowForm: false};

//     case 'TOGGLE_MEMORIZED':
//       const newWordsToggleMemorized = state.words.map(word => {
//         if (word.id === action.id) {
//           const newWordToggleMemorized = {
//             ...word,
//             isMemorized: !word.isMemorized,
//           };
//           return newWordToggleMemorized;
//         }
//         return word;
//       });
//       return {...state, words: newWordsToggleMemorized};

//     case 'REMOVE':
//       const newWordsRemove = state.words.filter(word => action.id !== word.id);
//       return {...state, words: newWordsRemove};

//     default:
//       return state;
//   }
// });
const defaultWords = [
  {id: 1, en: 'One', vn: 'Mot', isMemorized: true},
  {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
  {id: 3, en: 'Three', vn: 'Ba', isMemorized: false},
  {id: 4, en: 'Four', vn: 'Bon', isMemorized: false},
  {id: 5, en: 'Five', vn: 'Nam', isMemorized: true},
];

function wordReducer(state = defaultWords, action) {
  return state;
}

function shouldShowFormReducer(state = false, action) {
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
