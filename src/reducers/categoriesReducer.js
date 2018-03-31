import { 
    RECEIVE_CATEGORIES, 
    RECEIVE_CATEGORIES_SUCCESS, 
    RECEIVE_CATEGORIES_FAILURE } from '../actions/index';

const initialState = {
    isFetching: true,
    errors: false,
    items: []
};

/**
 * Get categories.
 * 
 * @param {Object} state.
 * @param {Object} action.
 * @returns {Object} a copy of the state modified according to the action dispatched.
 */
const categories = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_CATEGORIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: action.categories,
                receivedAt: action.receivedAt
            };
        case RECEIVE_CATEGORIES_FAILURE:
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

export default categories;