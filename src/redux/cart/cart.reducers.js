import CartActionTypes from "./cart.type";
import { AddTocart } from "./cart.count";
import { DelItem } from "./cart.count";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: AddTocart(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.id != action.payload.id),
      };

    case CartActionTypes.DEL_ITEM:
      return {
        ...state,
        cartItems: DelItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
