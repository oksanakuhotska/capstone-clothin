import { compose, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from 'redux';

import logger from "redux-logger"; // show state

import { rootReducer } from "./root-reducer"; // загальний редюсер

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);