import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import { createEntities, createMiddleware } from 'redux-tiles';
import tiles from './Actions/UserActions';
import axios from 'axios';

//const api = axios.create();
const { actions, reducer, selectors } = createEntities(tiles);
const { middleware, waitTiles } = createMiddleware({
	//api,
	actions,
	selectors
});

const middlewareCompl = applyMiddleware(
	promise(),
	thunk,
	createLogger(),
	middleware
);

const store = createStore(reducer, composeWithDevTools(middlewareCompl));

export { store };
export { actions };
export { selectors };
export { waitTiles };

export default { store, waitTiles, actions, selectors };
