const initialState = {
    uploadData: {},
  };
  
  export default function auth(state = initialState, action) {
    if (!state.hydrated) {
      state = Object.assign({}, initialState, state, { hydrated: true });
    }
    switch (action.type) {
      case 'UPLOAD_SUCCESS':
        return Object.assign({}, state, {
            uploadData: action.data,
        });
      default:
        return state;
    }
  }