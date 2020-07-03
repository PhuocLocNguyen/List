export default function shouldShowFormReducer(state = false, action) {
  if (action.type === 'TOGGLE_FORM' || action.type === 'ADD_WORD') {
    return !state;
  }
  return state;
}
