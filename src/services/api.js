import axios from 'apisauce';
import { push } from 'connected-react-router';

import { store } from '~/store';
import { AuthActions } from '~/store/ducks/auth';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.addRequestTransform((request) => {
  const { auth } = store.getState();
  const { token } = auth.data;

  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
});

api.addResponseTransform((response) => {
  if (response.status === 401) {
    store.dispatch(AuthActions.logout());
    store.dispatch(push('/login'));
  }
});

export default api;
