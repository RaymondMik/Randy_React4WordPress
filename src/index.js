import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

// Redux
import { Provider } from 'react-redux';
import store, { history } from './store';

// Bootstrap 4
import 'bootstrap/dist/css/bootstrap.css';

// Sass
import './assets/css/font-awesome.css';
import './styles/app.sass';

// Components
import App from './components/App';
import Blog from './components/Blog';
import Page from './components/Page';
import BlogSingle from './components/BlogSingle';
import NotFound from './components/NotFound';

// Render App
render((
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Blog} />
				<Route path="blog" component={Blog} />
				<Route path="blog/:article" component={BlogSingle} />
				<Route path="pages/:pageSlug" component={Page} />
				<Route path="*" component={NotFound} />
			</Route>
		</Router>
	</Provider>
	), document.getElementById('app'));
