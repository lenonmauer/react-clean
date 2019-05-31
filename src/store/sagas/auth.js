import { put, call } from 'redux-saga/effects';

import { AuthActions } from '~/store/ducks/auth';

import api from '~/services/api';

import handleError from './error-handler';

export function* auth(action) {
  const { username, password } = action.payload;

  const data = {
    username,
    password,
  };

  const response = yield call(api.post, '/login', data);

  if (response.ok) {
    yield put(AuthActions.postLoginSuccess(response.data));
  }
  else {
    yield put(handleError(response));
    yield put(AuthActions.postLoginFailure());
  }
}
