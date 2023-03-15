import { compose, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from "./root-reducer"; // загальний редюсер

import logger from "redux-logger"; // show state
// import { loggerMiddleware } from "./middlewaew/logger";

// використовується тільки 1 бібліотека сайд ефект
// import thunk from 'redux-thunk';

// import redux-sage for side effects
import createSagaMiddleware from "@redux-saga";
import { rootSaga } from "./root-saga";

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart'],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleWares = [loggerMiddleware];
const middleWares = [
	process.env.NODE_ENV !== 'production' && logger, 
	// thunk // added thunk
	sagaMiddleware,
].filter(Boolean);

const composeEnchancer = 
	(process.env.NODE_ENV !== 'production' && 
		window && 
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || 
	compose;

const composedEnhancers = composeEnchancer(applyMiddleware(...middleWares));

export const store = createStore(
	persistedReducer, 
	undefined, 
	composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);