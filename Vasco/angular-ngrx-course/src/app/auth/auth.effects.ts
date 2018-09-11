import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from "rxjs/Observable";
import * as fromActions from "../auth/login.actions";
import 'rxjs';
import {AuthActionTypes, Login, LoginReqAction, PrimeRequested} from "./login.actions";
import {map, tap} from "rxjs/internal/operators";
import {Action} from "@ngrx/store";


@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions) {
  }

   @Effect()
   primeRequested$: Observable<Action> =  this.actions$.pipe(
   ofType<PrimeRequested>(AuthActionTypes.PrimeRequestedAction),
     map(action => {
      console.log("This is from primeRequested ");
       return new fromActions.PrimeSuccess(action.payload);
     }));

  @Effect()
    login$: Observable<Action> =  this.actions$.pipe(
    ofType<LoginReqAction>(AuthActionTypes.LoginReqAction),
      map(action => {
       console.log("LoginReqAction from effect");
        return new fromActions.Login(action.payload); // check here. should return type of
        // effect has to return a class which is of type Action ?
      }));


     }


