import { Action } from '@ngrx/store';
import {User} from "../model/user.model";

export enum AuthActionTypes {
  LoginAction = '[LoginAction] Login Action',
  LogoutAction = '[LogoutAction] Logout Action',
  AccentAction = '[AccentAction] AccentAction Action',
  LanguageAction = '[Language Action] Language Action'
}

export class Login implements Action {
  readonly type = AuthActionTypes.LoginAction;
  constructor(public payload: User) {
  }
}

export class Accent implements Action {
readonly type = AuthActionTypes.AccentAction;
constructor(public accentClicked: boolean) {
}
}


export class Logout implements Action {
  readonly type = AuthActionTypes.LogoutAction;
  constructor() {
  }
}

export class Langauge implements Action {
  readonly type = AuthActionTypes.LanguageAction;
  constructor(public payload: string) {
  }
}

export type AuthActions = Login | Logout | Accent | Langauge;


// every action will have 3 sections.
// 1. Action class which has type and constructor which accepts payload
// 2. List of all the actions possible, this will normally be used in the reducer.
// 3. enum for Action name and description for each type in the action class
