const initialState = {
  user: {},
  oneUser: {},
};

export default function auth(state = initialState, action) {
  if (!state.hydrated) {
    state = Object.assign({}, initialState, state, { hydrated: true });
  }
  switch (action.type) {
    case 'USERS_SUCCESS':
      return Object.assign({}, state, {
        data: action.data,
      });
    case 'TOOGLE_DRAWER':
      return Object.assign({}, state, {
        visible: action.visible,
      });
    case 'ONE_USER_SUCCESS':
      return Object.assign({}, state, {
        oneUser: action.data,
      });
    default:
      return state;
  }
}
