import * as actionTypes from '../actions/types';
import { combineReducers } from 'redux';

const text = (state = [], action) => {
  switch(action.type) {
    case actionTypes.ADDING_TEXT:
      return state.map((s, index) => {
        return {
          ...s,
          id: index, 
          text: action.text 
        }
      })
    // case actionTypes.ADDING_TEXT: 
    //   return [
    //     ...state,
    //     { id: action.id, text: action.text}
    //   ]
    case actionTypes.REMOVING_TEXT:
      return [
        ...state.slice(0, action.id),
        state.slice(action.id, 0),
        ...state.slice(action.id + 1)
      ];
    default:
      return state;
  }
}

export const mainReducer = combineReducers({
    text
})
