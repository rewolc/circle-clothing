import CartActionTypes from "./cart.type";

export const toggleCartHidden = () => ({
type : CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (i) => ({
   type : CartActionTypes.ADD_ITEM,
   payload : i
})

export const removeI = (i) => ({
   type : CartActionTypes.REMOVE_ITEM,
   payload : i
})

export const delI = (i) => ({
   type : CartActionTypes.DEL_ITEM,
   payload: i 
})