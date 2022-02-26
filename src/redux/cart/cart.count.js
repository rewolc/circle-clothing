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

export const DelItem = (i, iToRemove) => {
   const exists = i.find(item => item.id == iToRemove.id);

   if(exists.quantity == 1){
      return (i.filter(el => el.id != iToRemove.id))
      }
   
      return i.map
   (
      i=> i.id == iToRemove.id
      ? {...i, quantity : i.quantity-1 }
      : i
   )
   }




