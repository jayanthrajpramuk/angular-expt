import {Action, State} from '@ngrx/store';
import {User} from "../model/user.model";
import {AuthActions, AuthActionTypes} from "../auth/login.actions";
import {isAction} from "@angular-devkit/schematics";


// this is the slice state, so that we can have restriction on the data which goes in to the
// store.
export interface AuthState {
  loggedIn: boolean;
  accentClicked: boolean;
  user: User;
  selectedLang: string;
}

// Initial state of the store.
export const initialState: AuthState  = {
    loggedIn : false,
    accentClicked: false,
    user : undefined,
    selectedLang : 'en'
};

// this is the factory for the auth module actions. This has to be passed in to module specific
// module.ts file

// this reducer will have 2 params , 1 is for the state and other is for the actions.
export function reducer(state: AuthState = initialState, action: AuthActions) {
console.log("the action is " + action);
  switch (action.type) {
    case  AuthActionTypes.LoginAction: {
      return {
        ...state,  // concept here : ... is to keep old and only update new one. to make it
        // immutable
        loggedIn: true,
        user: action.payload,
      };
    }
    case  AuthActionTypes.LogoutAction: {
      return {
        loggedIn: false,
        accentClicked: false,
        user: undefined,
        selectedLang : undefined
      };
    }
    case  AuthActionTypes.LanguageAction: {
      return {
        ...state,
        selectedLang: action.payload
      };
    }
    case  AuthActionTypes.PrimeSuccessAction: {
        console.log("Reducer");
         return state;
       }
    case  AuthActionTypes.AccentAction: {
    const currentState = state.user;
     /* return {
        loggedIn: true,
        accentClicked: true,
        user: currentState
      };*/
      return {
        ...state,
        accentClicked: true
      };
    }
    default : {
      return state;
    }
  }
}

// the reducers normally contain 3 sections.
// 1. Over-all Slice state
// 2. initial state of the slice
// 3. factory which takes state and list of actions possible for the module
