import { RECEIVE_PAGES } from '../actions/index';

/**
 * Get pages reducer.
 * 
 * @param {Object} state.
 * @param {Object} action.
 * @returns {Object} a copy of the state modified according to the action dispatched.
 */
const pages = (state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) => {
    switch (action.type) {
        case RECEIVE_PAGES:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.pages,
                receivedAt: action.receivedAt
            }
        default:
            return state;
    }
};

export default pages;
