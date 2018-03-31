import { 
    RECEIVE_PAGES, 
    RECEIVE_PAGES_SUCCESS, 
    RECEIVE_PAGES_FAILURE } from '../actions/index';

const initialState = {
    isFetching: true,
    errors: false,
    items: []
};

/**
 * Get pages.
 * 
 * @param {Object} state.
 * @param {Object} action.
 * @returns {Object} a copy of the state modified according to the action dispatched.
 */
const pages = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PAGES:
            return {
                ...state,
                isFetching: true,
                errors: false
            };
        case RECEIVE_PAGES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                errors: false,
                items: action.pages,
                receivedAt: action.receivedAt
            };
        case RECEIVE_PAGES_FAILURE:
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

export default pages;