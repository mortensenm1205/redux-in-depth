import * as actionTypes from './types';

let ID = 0;
export const addingText = (displayText) => {
    ID += 1;
    return { 
        type: actionTypes.ADDING_TEXT, 
        text: displayText, 
        id: ID
    }
}

export const removingText = (index) => {
    return {
        type: actionTypes.REMOVING_TEXT, 
        index 
    }
}