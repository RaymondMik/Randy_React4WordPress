import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/index';
import rootSaga from './sagas';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware()

// Redux Devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store;

const devStoreConfig = () => {
	return store = createStore(
		rootReducer,
		composeEnhancers(
			applyMiddleware(
				sagaMiddleware,
				loggerMiddleware
			  ),
		)
	);
};

const prodStoreConfig = () => {
	return store = createStore(
		rootReducer,
		composeEnhancers(
			applyMiddleware(
				sagaMiddleware
			  ),
		)
	);
}; 

(function initStore() {
	const store = process.env.NODE_ENV === 'development' ? devStoreConfig() : prodStoreConfig();
	sagaMiddleware.run(rootSaga);
	
	return store;
})();

export const history = syncHistoryWithStore(browserHistory, store);

export default store;