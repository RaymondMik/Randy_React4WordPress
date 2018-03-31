import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './postsReducer';
import categories from './categoriesReducer';
import tags from './tagsReducer';
import { comments, postedComments } from './commentsReducer';
import pages from './pagesReducer';


// Combine all reducers
const rootReducer = combineReducers({ 
    posts, 
    categories, 
    tags, 
    comments, 
    postedComments, 
    pages,
    routing: routerReducer 
});

// selectors used in mapStateToProps()
export const selectCategories = (state) => state.categories;
export const selectTags = (state) => state.tags;
export const selectPosts = (state) => state.posts;
export const selectPages = (state) => state.pages;
export const selectComments = (state) => state.comments;
export const selectApod = (state) => state.apod;
export const selectPostedComments = (state) => state.postedComments;

export default rootReducer;