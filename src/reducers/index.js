// Combine all reducers
// Reducers manipulate state according to the actions dispatched by the app

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {    REQUEST_POSTS,
            RECEIVE_POSTS,
            REQUEST_CATEGORIES,
            RECEIVE_CATEGORIES,
            REQUEST_TAGS,
            RECEIVE_TAGS,
            REQUEST_COMMENTS,
            RECEIVE_COMMENTS,
            ADD_POST_COMMENT,
            REQUEST_PAGES,
            RECEIVE_PAGES,
} from '../actions/index';

// Get posts
function posts(state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) {
    switch (action.type) {
        case REQUEST_POSTS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            }
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
}

// Get categories
function categories(state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) {
    switch (action.type) {
        case REQUEST_CATEGORIES:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            }
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
}

// Get tags
function tags(state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) {
    switch (action.type) {
        case REQUEST_TAGS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            }
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
}

// Get comments
function comments(state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) {
    switch (action.type) {
        case REQUEST_COMMENTS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            }
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
}

//Add comment
function lastCommentAdded(state = {
    item: {},
    error: false
}, action) {
    switch (action.type) {
        case ADD_POST_COMMENT:
        console.log(99, action.comment)
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
}

// Get pages
function pages(state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) {
    switch (action.type) {
        case REQUEST_PAGES:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            }
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
}

const rootReducer = combineReducers({ posts, categories, tags, comments, lastCommentAdded, pages, routing: routerReducer });

export default rootReducer;