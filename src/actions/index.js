import * as actionTypes from './types';

export const actionUpdatingText = (text) => {type: actionTypes.UPDATING_TEXT, text}
export const actionRemovingText = () => {type: actionTypes.REMOVING_TEXT}
