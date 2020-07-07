import {actionType} from './actionTypes';

function onToggleMemorized(id) {
  return {type: actionType.TOGGLE_MEMORIZED, id};
}
function onRemove(id) {
  return {type: actionType.REMOVE, id};
}
function onAddWord(en, vn) {
  return {type: actionType.ADD_WORD, en, vn};
}
function onToggleForm() {
  return {type: actionType.TOGGLE_FORM};
}
function onSetFilterMode(newfilterMode) {
  return {type: actionType.SET_FILTER_MODE, newfilterMode};
}

export const actionCreator = {
  onToggleMemorized,
  onRemove,
  onAddWord,
  onToggleForm,
  onSetFilterMode,
};
