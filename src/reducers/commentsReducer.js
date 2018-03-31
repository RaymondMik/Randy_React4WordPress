import { 
    RECEIVE_COMMENTS, 
    RECEIVE_COMMENTS_SUCCESS, 
    RECEIVE_COMMENTS_FAILURE, 
    POST_COMMENT,
    POST_COMMENT_SUCCESS,
    POST_COMMENT_FAILURE, } from '../actions/index';

const initialReceiveState = {
    isFetching: true,
    items: [],
    errors: false,
    receivedAt: null
};

/**
 * Get comments.
 * 
 * @param {Object} state.
 * @param {Object} action.
 * @returns {Object} a copy of the state modified according to the action dispatched.
 */
const comments = (state = initialReceiveState, action) => {
    switch (action.type) {
        case RECEIVE_COMMENTS:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_COMMENTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: action.comments,
                receivedAt: action.receivedAt
            };
        case RECEIVE_COMMENTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errors: action.error,
                receivedAt: action.receivedAt
            };
        default:
            return state;
    }
};

const initialPostState = {
    isPosting: false,
    items: [],
    error: false,
    receivedAt: null
};

/**
 * Post a comment.
 * 
 * @param {Object} state.
 * @param {Object} action.
 * @returns {Object} a copy of the state modified according to the action dispatched.
 */
const postedComments = (state = initialPostState, action) => {
    switch (action.type) {
        case POST_COMMENT:
            return {
                ...state,
                isPosting: true,
                error: false
            };
        case POST_COMMENT_SUCCESS:
            const items = [...state.items, action.response];

            return {
                ...state,
                isPosting: false,
                items,
                error: false,
                receivedAt: action.receivedAt
            };
        case POST_COMMENT_FAILURE:
            return {
                ...state,
                isPosting: false,
                error: action.error,
                receivedAt: action.receivedAt
            };
        default:
            return state;
    }
};

export { comments, postedComments };