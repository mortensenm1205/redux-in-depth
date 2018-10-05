import * as actionTypes from '../actions/types';
import { combineReducers } from 'redux';

const updatingText = (state = '', action) => {
  switch(action.type) {
    case actionTypes.UPDATING_TEXT:
      return action.text;
    default:
      return state;
  }
}

const removingText = (state = '', action) => {
  switch(action.type) {
    case actionTypes.REMOVING_TEXT:
      return state;
    default:
      return state;
  }
}

export const mainReducer = combineReducers({
    updatingText,
    removingText
})
