export const AddTocart = (cartItems, iToAdd) => {

   const exist = cartItems.find(i => i.id == iToAdd.id);



if (exist){
   return cartItems.map
   (
      i=> i.id == iToAdd.id
      ? {...i, quantity : i.quantity +1 }
      : i
   )
   
}
else {
   return [...cartItems, {...iToAdd, quantity :1 }] 
}
}