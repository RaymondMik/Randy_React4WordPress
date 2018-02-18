import { RECEIVE_COMMENTS } from '../actions/index';
import { ADD_POST_COMMENT } from '../actions/index';

/**
 * Get comments reducer.
 * 
 * @param {Object} state.
 * @param {Object} action.
 * @returns {Object} a copy of the state modified according to the action dispatched.
 */
const comments = (state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) => {
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.comments,
                receivedAt: action.receivedAt
            }
        default:
            return state;
    }
};

//Add comment
const lastCommentAdded = (state = {
    item: {},
    error: false
}, action) => {
    switch (action.type) {
        case ADD_POST_COMMENT:
        if (action.comment.data && action.comment.data.status !== 200) {
            return {
                ...state,
                item: {},
                error: true
            }
        } else {
            return {
                ...state,
                item: action.comment,
                error: false
            }
        }
            
        default:
            return state;
    }
};

export { comments, lastCommentAdded };

