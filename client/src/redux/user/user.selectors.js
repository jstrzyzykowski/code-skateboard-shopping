import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => {
    console.log("Pobieram currentUser - wersja reselect")
    return user.currentUser
  }
);