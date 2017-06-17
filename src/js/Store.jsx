import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
//import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
//import promise from 'redux-promise-middleware';
import { createEntities, createMiddleware } from 'redux-tiles';
import { get } from 'axios';

import tiles from './Actions/UserActions';
import extraReducer from './Reducer/MetadataReducer';

//const middleware = applyMiddleware(promise(), thunk, createLogger());
const { actions, reducer, selectors } = createEntities(tiles, 'tiles');
const params = {
	actions,
	selectors,
	api: { get }
};
const { middleware: tilesMiddleware, waitTiles } = createMiddleware(params);
const middleware = applyMiddleware(tilesMiddleware, createLogger());

const store = createStore(combineReducers({ tiles: reducer, metadata: extraReducer }), composeWithDevTools(middleware));

export { store };
export { actions };
export { selectors };
export { waitTiles };

export default { store, waitTiles, actions, selectors };
