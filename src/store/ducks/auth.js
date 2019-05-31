const Types = {
  POST_LOGIN_REQUEST: 'auth/POST_LOGIN_REQUEST',
  POST_LOGIN_SUCCESS: 'auth/POST_LOGIN_SUCCESS',
  POST_LOGIN_FAILURE: 'auth/POST_LOGIN_FAILURE',
  LOGOUT: 'auth/LOGOUT',
};

const INITIAL_STATE = {
  logged: false,
  data: {},
  loading: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.POST_LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case Types.POST_LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        logged: true,
        data: action.payload.data,
      };
    }
    case Types.POST_LOGIN_FAILURE: {
      return {
        ...INITIAL_STATE,
      };
    }
    case Types.LOGOUT: {
      return {
        ...INITIAL_STATE,
      };
    }
    default:
      return state;
  }
}

export const Creators = {
  postLoginRequest: data => ({
    type: Types.POST_LOGIN_REQUEST,
    payload: data,
  }),

  postLoginSuccess: data => ({
    type: Types.POST_LOGIN_SUCCESS,
    payload: {
      data,
    },
  }),

  postLoginFailure: () => ({
    type: Types.POST_LOGIN_FAILURE,
  }),

  logout: () => ({
    type: Types.LOGOUT,
  }),
};

export const AuthTypes = Types;

export const AuthActions = Creators;
