let initialState = { data: [], cart: [] };

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'setData': {
      return {
        ...state,
        data: action.payload,
      };
    }
    case 'setCart': {
      return {
        ...state,
        cart: action.payload,
      };
    }
    default:
      return state;
  }
}

export default reducer;
