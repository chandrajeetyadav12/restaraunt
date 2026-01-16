export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };

    case "LOGOUT":
      return {
        user: null,
        isAuthenticated: false,
        loading: false,
      };

    case "AUTH_DONE":
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
