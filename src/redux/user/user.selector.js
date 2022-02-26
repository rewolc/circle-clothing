import { createSelector } from "reselect";


const selectUser = state => state.user;

export const CurUser = createSelector(
   [selectUser],
   user=> user.currentUser
)