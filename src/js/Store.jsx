import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import tiles from './tiles/user';
import axios from 'axios';
import { createEntities, createMiddleware } from 'redux-tiles';

export const { actions, selectors, reducer } = createEntities(tiles);
const params = { actions, selectors, api: axios };
const { middleware: tilesMiddleware } = createMiddleware(params);
const middleware = applyMiddleware(tilesMiddleware, createLogger());

export const store = createStore(reducer, composeWithDevTools(middleware));

export default { store, actions, selectors };
