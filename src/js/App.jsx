import 'spectre.css/dist/spectre.min.css';
import '../css/app.css';

import React from 'react';
import ReactDom from 'react-dom';
import UserListContainer from './Components/UserListContainer';
import { Provider } from 'react-redux';
import store from './Store';
import { Route, HashRouter as Router } from 'react-router-dom';

const app = document.getElementById('App');

ReactDom.render(
	<Provider store={store}>
		<Router>
			<Route path="/" component={UserListContainer} />
		</Router>
	</Provider>,
	app
);
