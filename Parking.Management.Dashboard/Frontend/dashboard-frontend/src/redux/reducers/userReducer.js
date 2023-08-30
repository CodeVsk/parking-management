const initialState = {
  id: "",
  role: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        id: action.payload.id,
        role: action.payload.role,
      };
    case "RESET_USER":
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
