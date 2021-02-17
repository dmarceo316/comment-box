import * as ActionTypes from '../actions/ActionTypes';

export const counterReducer = (state= {}, action) => {
    switch(action.type) {
        case ActionTypes.INCREMENT:
            if (action.id !== state.id){
                return state;
            }
            return{
                ...state,
                count: state.count+1
            }
        default:
            return state;
    }
};

let nextId = 0
export const Comments = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;
            comment.id = nextId++ 
            comment.count = 0
            comment.date = new Date().toISOString();
            const commentCounter = state.concat(comment);
            return commentCounter
        case ActionTypes.INCREMENT:
            return state.map(counter => counterReducer(counter, action))
        default:
            return state;
    }
};

