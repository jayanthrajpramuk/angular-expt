import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AuthState} from "./auth/auth.reducer";
import {Logout} from "./auth/login.actions";
import {map} from "rxjs/internal/operators";
import {isLoggedIn, isLoggedOut, showLogin, showLogout} from "./auth/auth.selectors";
import {Router} from "@angular/router";
import {ClearAllCoursesAction} from "./courses/courses.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

isLoggedIn$: Observable <boolean>;
isLoggedOut$: Observable <boolean>;

  constructor(private store: Store<AuthState>, private router: Router) {

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
          select(showLogin)
      );

      this.isLoggedOut$ = this.store.pipe(
          // map(state => !!state.auth.loggedIn)
        select(showLogout)
      );

  }

  logout() {
    this.store.dispatch(new Logout());
    this.store.dispatch(new ClearAllCoursesAction());
    this.router.navigateByUrl('/login');
  }


}
