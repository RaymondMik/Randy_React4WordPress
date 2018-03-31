import { 
    RECEIVE_POSTS, 
    RECEIVE_POSTS_SUCCESS, 
    RECEIVE_POSTS_FAILURE } from '../actions/index';

const initialState = {
    isFetching: true,
    errors: false,
    items: []
};

/**
 * Get posts.
 * 
 * @param {Object} state.
 * @param {Object} action.
 * @returns {Object} a copy of the state modified according to the action dispatched.
 */
const posts = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_POSTS:
            return {
                ...state,
                isFetching: true,
                errors: false
            };
        case RECEIVE_POSTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                errors: false,
                items: action.posts,
                receivedAt: action.receivedAt
            };
        case RECEIVE_POSTS_FAILURE:
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

export default posts;