import * as actionTypes from '../actions/types';
import { combineReducers } from 'redux';

const text = (state = '', action) => {
  switch(action.type) {
    case actionTypes.UPDATING_TEXT:
      return action.text;
    case actionTypes.REMOVING_TEXT:
      return action.text = '';
    default:
      return state;
  }
}

export const mainReducer = combineReducers({
    text
})
