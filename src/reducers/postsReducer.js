import { RECEIVE_POSTS } from '../actions/index';

/**
 * Get posts reducer.
 * 
 * @param {Object} state.
 * @param {Object} action.
 * @returns {Object} a copy of the state modified according to the action dispatched.
 */
const posts = (state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) => {
    switch (action.type) {
        case RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                receivedAt: action.receivedAt
            }
        default:
            return state;
    }
};

export default posts;