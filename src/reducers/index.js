import * as actions from '../actions/types';

const updatingText = (state = '', action) => {
  switch(action.type) {
    case actions.UPDATING_TEXT:
      return action.text;
    default:
      return state;
  }
}


export const mainReducer = (state, action) => {
  return {
    updatingText: updatingText(state.updatingText, action)
  }
}
