import {Component, OnInit} from '@angular/core';

import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-http-exp',
  templateUrl: './http-exp.component.html',
  styleUrls: ['./http-exp.component.css']
})
export class HttpExpComponent implements OnInit {
  public http;
  public users;
  public posts;
  public title;
  public postsService;

  constructor(postsService: PostsService) {
    // no heavy code in constructor
    this.postsService = postsService;
  }

  ngOnInit() {
    console.log('ng init');
    this.getUserObjects();
    this.getPostObjects();
  }

  public getUserObjects() {
    this.postsService.getUserObjects()
      .subscribe(response => {
        this.users = response.json();
        console.log(response.json());
      }, error => {
        console.log(error);
      });
  }

  public onAdd() {
    this.postUserSelectedValue(this.title);
    this.title = '';
  }

  postUserSelectedValue(title) {
    const postObj = {
      title: title
    };
    this.postsService.postUserSelectedValue(postObj)
      .subscribe(response => {
        console.log(response);
        postObj['id'] = response.json().id;
        this.posts.splice(0, 0, postObj);
      }, (error: Response) => {
      console.log(error.status);
      if (error.status === 400) {
      // do something
      } else {
      // do something else
      }
        console.log(error);
      });

  }


  updateClicked(updateObject) {
    this.postsService.updateClicked(updateObject, {'newProperty': 'newValue'})
      .subscribe(updatedobj => {
        console.log(updatedobj);
      },
      error => {
        console.log(error);
      });
  }

  deleteClicked(deleteObject) {
    this.postsService.deleteClicked(deleteObject.id)
      .subscribe(deleteObj => {
        console.log(deleteObj);
      }, error => {
        console.log(error);
      });
  }

  getPostObjects() {
    this.postsService.getPostObjects()
      .subscribe(response => {
        this.posts = response.json();
      }, error => {
        console.log(error);
      });
  }

}
