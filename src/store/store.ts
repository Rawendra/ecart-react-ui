import { configureStore } from "@reduxjs/toolkit";

import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../saga/rootSaga';
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

// then run the saga
sagaMiddleware.run(rootSaga)

// render the application