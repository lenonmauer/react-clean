import { connectRouter } from 'connected-react-router';
import { reducer as toastr } from 'react-redux-toastr';

import { persistCombineReducers, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import auth from './auth';

const SetTransform = createTransform(
  (inboundState, key) => {
    const { data } = inboundState;

    return key === 'auth' ? { data } : inboundState;
  },
  outboundState => outboundState,
);

const persistConfig = {
  key: 'root',
  storage,
  transforms: [SetTransform],
  whitelist: ['auth'],
};

export default history => persistCombineReducers(persistConfig, {
  router: connectRouter(history),
  toastr,
  auth,
});
