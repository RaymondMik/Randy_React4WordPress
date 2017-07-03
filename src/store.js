import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux';
import { fetchPosts, fetchCategories, fetchComments, fetchTags, fetchPages } from './actions/index';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';

const loggerMiddleware = createLogger();
const defaultState = {
	posts: [],
	pages: [],
	categories: [],
	tags: [],
	comments: [],
	lastCommentAdded: []
};

// Redux Devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	defaultState,
	composeEnhancers(
		applyMiddleware(
		    thunkMiddleware, // lets us dispatch() functions
		    loggerMiddleware // neat middleware that logs actions
		  ),
	)
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;