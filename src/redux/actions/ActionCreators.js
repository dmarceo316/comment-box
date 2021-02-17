import * as ActionTypes from './ActionTypes';

export const addComment = (id, author, text, date, count) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        id : id,
        author: author,
        text: text,
        count: count, 
        date: date
    }
});


export const increment = (id) => {
    return {
        type: ActionTypes.INCREMENT,
        id
    };
};




