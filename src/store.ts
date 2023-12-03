import { Store, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root.reducer';
import { persistStore } from 'redux-persist';
import rootSaga from './root.saga';

const sagaMiddleware = createSagaMiddleware();
const store: Store = createStore(rootReducer, {}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
