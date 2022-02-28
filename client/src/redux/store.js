import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

import createSagaMiddleware from 'redux-saga';
import rootSaga from "./root.saga";

import persistedReducer from "./root.reducer";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);