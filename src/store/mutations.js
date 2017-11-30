export const LOGIN = (state) => {
  console.log(state)
}

export const LOGIN_SUCCESS = (state, payload) => {
  console.log(payload.token);
  console.log(payload.user);
  state.token = payload.token;
  state.currentUser = payload.user;
  state.isLoggedIn = true;
}

export const CURRENT_USER_ACTIVE = (state, payload) => {
  state.token = payload.token
  state.currentUser = payload.user;
  state.isLoggedIn = true;
}

export const LOGOUT = (state) => {
  state.currentUser = {};
  state.token = '';
  state.isLoggedIn = false;
}

export const SET_MESSAGE = (state, message) => {
  state.message = message;
}

export const CONSUME_MESSAGE = (state) => {
  state.message = '';
}
