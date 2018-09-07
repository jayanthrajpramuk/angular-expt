 import {createSelector} from "@ngrx/store";

 // ths is one of the selectors. convention is commonly used selector should be used 1st so
 // that it will remember / memoize the output.
 export const selectAuthState = state => state.auth;

 export const isLoggedIn = createSelector(
 selectAuthState, // taking the selector as input. But chekc how to take multiple selectors as
 // input
 auth => !auth.loggedIn
 );

 export const isLoggedOut = createSelector(
 selectAuthState,
 auth => !!auth.loggedIn
 );
