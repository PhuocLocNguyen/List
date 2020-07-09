import {actionType} from './actionTypes';
import axios from 'axios';
import EndpointFactory from 'axios-endpoints';

const axiosInstance = axios.create({
  baseURL: 'https://servernode1862020.herokuapp.com',
});

const Endpoint = EndpointFactory(axiosInstance);

const wordEndPoint = new Endpoint('/word');

function fetchDataWords() {
  return dispatch => {
    wordEndPoint
      .get()
      .then(reponse => console.log(reponse.data))
      .catch(error => console.log(error.message));
  };
}

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
  fetchDataWords,
};
