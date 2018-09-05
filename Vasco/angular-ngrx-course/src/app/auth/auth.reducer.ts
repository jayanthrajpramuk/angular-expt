import {Action, State} from '@ngrx/store';
import {User} from "../model/user.model";
import {AuthActions, AuthActionTypes} from "../auth/login.actions";
import {isAction} from "@angular-devkit/schematics";


export interface AuthState {
  loggedIn: boolean;
  accentClicked: boolean;
  user: User;
  selectedLang: string;
}

export const initialState: AuthState  = {
    loggedIn : false,
    accentClicked: false,
    user : undefined,
    selectedLang : 'en'
};

export function reducer(state: AuthState = initialState, action: AuthActions) {
console.log("the action is " + action);
  switch (action.type) {
    case  AuthActionTypes.LoginAction: {
      return {
        loggedIn: true,
        accentClicked: false,
        user: action.payload,
        selectedLang : 'en'
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
