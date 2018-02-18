import { RECEIVE_CATEGORIES } from '../actions/index';

/**
 * Get categories reducer.
 * 
 * @param {Object} state.
 * @param {Object} action.
 * @returns {Object} a copy of the state modified according to the action dispatched.
 */
const categories = (state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) => {
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.categories,
                receivedAt: action.receivedAt
            }
        default:
            return state;
    }
};

export default categories;
