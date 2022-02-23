import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
   [selectCart],
   cart => cart.cartItems
);

export const selectCount = createSelector(
  [selectCartItems],
   cartItems => cartItems.reduce((sum , i)  => (sum + i.quantity), 0 )
);