import * as actionTypes from './types';

export const actionUpdatingText = (text) => {
  return {type: actionTypes.UPDATING_TEXT, text}
};
