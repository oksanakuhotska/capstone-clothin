import { compose, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from "./root-reducer"; // загальний редюсер

import logger from "redux-logger"; // show state
// import { loggerMiddleware } from "./middlewaew/logger";

import thunk from 'redux-thunk';

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleWares = [loggerMiddleware];
const middleWares = [
	process.env.NODE_ENV !== 'production' && logger, 
	thunk // added thunk
].filter(Boolean);

const composeEnchancer = 
	(process.env.NODE_ENV !== 'production' && 
		window && 
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || 
	compose;

const composedEnhancers = composeEnchancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);