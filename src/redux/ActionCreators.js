import * as ActionTypes from './ActionTypes';

export const addComment = (commentId, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        commentId : commentId,
        author: author,
        text: text
    }
});