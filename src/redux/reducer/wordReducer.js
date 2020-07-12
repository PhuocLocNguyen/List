export default function wordReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_DATA_WORD':
      return action.words;

    case 'ADD_WORD':
      const newWordsAdd = [...state];
      newWordsAdd.unshift(action.word);
      return newWordsAdd;

    case 'TOGGLE_MEMORIZED':
      const newWordsToggleMemorized = state.map(word => {
        if (word._id === action.word._id) {
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
      const newWordsRemove = state.filter(word => action.word._id !== word._id);
      return newWordsRemove;

    default:
      return state;
  }
}
