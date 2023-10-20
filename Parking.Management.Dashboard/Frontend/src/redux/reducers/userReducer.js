const initialState = {
  id: null,
  role: null,
  expireIn: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        id: action.payload.id,
        role: action.payload.role,
        expireIn: action.payload.expireIn,
      };
    case "RESET_USER":
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
