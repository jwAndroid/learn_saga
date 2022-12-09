import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer, {rootSaga} from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  middleware: [sagaMiddleware],
  reducer: rootReducer,
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
