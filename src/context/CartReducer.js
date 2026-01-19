export const CartReducer = (state, action) => {
  switch (action.type) {
    case "CART_LOADING":
      return {
        ...state,
        loading: true,
      };

    case "SET_CART":
     return {
        ...state,
        cart: action.payload, 
        loading: false,
      };

    case "ADD_TO_CART":
     return {
        ...state,
        cart: action.payload,
        loading: false,
      };

    case "CLEAR_CART":
       return {
        ...state,
        cart: null,
        loading: false,
      };

    default:
      return state;
  }
};
