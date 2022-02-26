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

export const SelectCartHidden = createSelector(
[selectCart],
cart => cart.hidden 
)

export const selectCartTotal = createSelector(
   [selectCartItems],
   cartItems => cartItems.reduce((sum , i)  => (sum + i.quantity*i.price), 0 )
)