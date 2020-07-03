export default function filterModeReducer(state = 'Show_All', action) {
  if (action.type === 'SET_FILTER_MODE') {
    return action.newfilterMode;
  }
  return state;
}
