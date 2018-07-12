import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {Store} from "@ngrx/store";

import {AuthService} from "../auth.service";
import {tap} from "rxjs/operators";
import {noop} from "rxjs";
import {Router} from "@angular/router";
import {AppState} from "../../reducers/index";
import {Accent, AuthActions, Langauge, Login} from "../login.actions";
import {AuthState} from "../auth.reducer";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
      private fb: FormBuilder,
      private auth: AuthService,
      private router: Router,
      private store: Store<AuthState>) {

      this.form = fb.group({
          email: ['test@angular-university.io', [Validators.required]],
          password: ['test', [Validators.required]]
      });

  }

  ngOnInit() {

  }

  login() {
    console.log("Login Button Clicked");
    const object = this.form.value;

  this.auth.login(object.email, object.password)
    .pipe(
      tap(user => {
        this.store.dispatch(new Login(user));
         this.router.navigateByUrl('/courses');
      })
    )
    .subscribe(noop, () => alert('loginFalied'));
  }

  accent() {
  console.log("Accent button clicked");
  const accentClicked = true;
  this.store.dispatch(new Accent(accentClicked));
  }

  language(selectedLang) {
  console.log('Selected Language is ' + selectedLang);
      this.store.dispatch(new Langauge(selectedLang));
  }


}
