import * as actions from '../actions/types';
import { combineReducers } from 'redux';

const updatingText = (state = '', action) => {
  switch(action.type) {
    case actions.UPDATING_TEXT:
      return action.text + " plus some text from the reducer";
    default:
      return state;
  }
}


export const mainReducer = combineReducers({
    updatingText
})
