import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './postsReducer.js';
import categories from './categoriesReducer.js';
import tags from './tagsReducer.js';
import { comments, lastCommentAdded } from './commentsReducer.js';
import pages from './pagesReducer.js';

// Combine all reducers
const rootReducer = combineReducers({ posts, categories, tags, comments, lastCommentAdded, pages, routing: routerReducer });

export default rootReducer;