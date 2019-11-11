import { createSelector } from "reselect";

const selectUser = state => state.uyser;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => selectCurrentUser.currentUser
);
