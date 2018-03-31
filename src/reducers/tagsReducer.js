import { 
    RECEIVE_TAGS, 
    RECEIVE_TAGS_SUCCESS, 
    RECEIVE_TAGS_FAILURE } from '../actions/index';

const initialState = {
    isFetching: true,
    errors: false,
    items: []
};

/**
 * Get tags.
 * 
 * @param {Object} state.
 * @param {Object} action.
 * @returns {Object} a copy of the state modified according to the action dispatched.
 */
const tags = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_TAGS:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_TAGS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: action.tags,
                receivedAt: action.receivedAt
            };
        case RECEIVE_TAGS_FAILURE:
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

export default tags;