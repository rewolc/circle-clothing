import { createSelector } from "reselect";
const COLLECTION_ID_MAP = {
   hats : 1 ,
   sneakers : 2,
   jackets :3,
   womens : 4,
   mens : 5
}

const selectorShop = state => state.shop;

export const selectShopCollection = createSelector(
   [selectorShop],
   shop => shop.collections
) 

export const selectCollection  = collectionUrlParam =>
createSelector(
   [selectShopCollection],
   collections => collections.find(i => i.id == COLLECTION_ID_MAP[collectionUrlParam])
)

// import { createSelector } from 'reselect';

// const selectorShop = state => state.shop;

// export const selectShopCollection = createSelector(
//   [selectorShop],
//   shop => shop.collections
// );

// export const selectCollections = createSelector(
//   [selectShopCollection],
//   collections => Object.keys(collections).map(key => collections[key])
// );

// export const selectCollection = collectionUrlParam =>
//   createSelector(
//     [selectShopCollection],
//     collections => collections[collectionUrlParam]
//   );
