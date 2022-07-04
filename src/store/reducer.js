let initialState = { data: [] };

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'setData': {
      return {
        ...state,
        data: action.payload,
      };
    }
    default:
      return state;
  }
}

export default reducer;
