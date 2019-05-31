import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '~/store/ducks';
import sagas from '~/store/sagas';
import history from '~/routes/history';

const isDEV = process.env.NODE_ENV === 'development';
const sagaMonitor = isDEV ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const composer = isDEV
  ? compose(
    applyMiddleware(...middlewares),
    console.tron.createEnhancer(),
  )
  : compose(applyMiddleware(...middlewares));

const store = createStore(rootReducer(history), composer);
const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
