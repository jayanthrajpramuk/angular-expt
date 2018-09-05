import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AuthState} from "./auth/auth.reducer";
import {Logout} from "./auth/login.actions";
import {map} from "rxjs/internal/operators";
import {isLoggedIn, isLoggedOut} from "./auth/auth.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

isLoggedIn$: Observable <boolean>;
isLoggedOut$: Observable <boolean>;

  constructor(private store: Store<AuthState>) {

  }

  ngOnInit() {
  // accessing data from the store
 /* this.store.subscribe(state => {
    console.log('Store state is', state);
  });*/

      this.store
     /* .pipe(
        map(state => state.auth.loggedIn)
      )*/
      .subscribe(state => {
       // console.log('Logged in state is', state.auth.loggedIn);
        console.log('Full State is', state);
      });

      this.isLoggedIn$ = this.store.pipe(
     // map(state => !state.auth.loggedIn)
          select(isLoggedIn)
      );

      this.isLoggedOut$ = this.store.pipe(
          // map(state => !!state.auth.loggedIn)
        select(isLoggedOut)
      );

  }

  logout() {
    this.store.dispatch(new Logout());
  }


}
