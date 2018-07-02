import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class PostsService {

public http;
public posturl = 'https://jsonplaceholder.typicode.com/posts';
public userurl = 'https://jsonplaceholder.typicode.com/users';
  constructor(http: Http) {
  this.http = http;
  }

  getUserObjects() {
    return this.http.get(this.userurl);
  }

  getPostObjects() {
    return  this.http.get(this.posturl);
  }

  postUserSelectedValue(postObj) {
    return this.http.post(this.posturl, JSON.stringify(postObj));
  }

  deleteClicked(deleteObj) {
    return  this.http.patch(this.posturl + '/' + deleteObj);
  }

  updateClicked(updateObject, newProperty) {
    return  this.http.patch(this.posturl + '/'  + updateObject.id, newProperty);
  }
}
