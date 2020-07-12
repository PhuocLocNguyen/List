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
      .then(reponse => {
        const data = reponse.data;
        const {success, words} = data;
        if (success && words) {
          dispatch({type: actionType.FETCH_DATA_WORD, words});
        }
      })

      .catch(error => console.log(error.message));
  };
}

function onToggleMemorized(_id, isMemorized) {
  const putWordEndpoint = new Endpoint('/word/' + _id);
  return dispatch => {
    putWordEndpoint
      .put({isMemorized: !isMemorized})
      .then(reponse => {
        const data = reponse.data;
        const {success, word} = data;
        if (success && word) {
          dispatch({type: actionType.TOGGLE_MEMORIZED, word});
        }
      })
      .catch(error => console.log(error.message));
  };
}
function onRemove(_id) {
  const removeWordEndpoint = new Endpoint('/word/' + _id);
  return dispatch => {
    removeWordEndpoint
      .delete()
      .then(reponse => {
        const data = reponse.data;
        const {success, word} = data;
        if (success && word) {
          dispatch({type: actionType.REMOVE, word});
        }
      })
      .catch(error => console.log(error.message));
  };
}
function onAddWord(en, vn) {
  return dispatch => {
    wordEndPoint
      .post({en, vn})
      .then(reponse => {
        const data = reponse.data;
        const {success, word} = data;
        if (success && word) {
          dispatch({type: actionType.ADD_WORD, word});
        }
      })
      .catch(error => console.log(error.message));
  };
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
