import { RECEIVE_TAGS } from '../actions/index';

/**
 * Get tags reducer.
 * 
 * @param {Object} state.
 * @param {Object} action.
 * @returns {Object} a copy of the state modified according to the action dispatched.
 */
const tags = (state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) => {
    switch (action.type) {
        case RECEIVE_TAGS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.tags,
                receivedAt: action.receivedAt
            }
        default:
            return state;
    }
};

export default tags;