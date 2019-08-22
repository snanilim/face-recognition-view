const initialState = {
  cost: {},
  oneCost: {},
};

export default function auth(state = initialState, action) {
  if (!state.hydrated) {
    state = Object.assign({}, initialState, state, { hydrated: true });
  }
  switch (action.type) {
    case 'COSTS_SUCCESS':
      return Object.assign({}, state, {
        data: action.data,
      });
    case 'TOOGLE_COST_DRAWER':
      return Object.assign({}, state, {
        visible: action.visible,
      });
    case 'ONE_COST_SUCCESS':
      return Object.assign({}, state, {
        oneCost: action.data,
      });
    default:
      return state;
  }
}
