import * as actions from './types';

export const actionUpdatingText = (text) => {
  return {type: actions.UPDATING_TEXT, text}
};
