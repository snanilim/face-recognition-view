const initialState = {
  cost: {},
  matchData: {},
};

export default function auth(state = initialState, action) {
  if (!state.hydrated) {
    state = Object.assign({}, initialState, state, { hydrated: true });
  }
  switch (action.type) {
    case 'MATCH_SUCCESS':
      return Object.assign({}, state, {
        matchData: action.data,
      });
    default:
      return state;
  }
}
