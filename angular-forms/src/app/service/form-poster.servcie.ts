/**
 * Created by a028515 on 27-03-2018.
 */

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Hero} from '../hero';
import 'rxjs/Rx';
import { RequestOptions, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FormPoster {
  constructor(private _http: Http) {
  }

  postEmployeeService(hero: Hero): Observable<any> {
    console.log('in Form Poster Service' + hero);
    const body = JSON.stringify(hero);
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this._http.post('http://localhost:3100/blabla', body, options)
      .map(this.extractData)
      .catch(this.handleError);
    }

  getPower(): Observable<any> {
    return this._http.get('http://localhost:3100/getPower')
          .map(this.extractPower)
          .catch(this.handleError);
        }

    private extractData(res: Response) {
    const body = res.json();
    return body.fields || {};
    }

    private extractPower (res: Response) {

      const body = res.json();
      console.log('In service - powers' + body.data);
      return body.data || {};
    }

  private handleError(err: any) {
   console.log('Error is' + err);
   return Observable.throw(err.statusText);
   }

}
