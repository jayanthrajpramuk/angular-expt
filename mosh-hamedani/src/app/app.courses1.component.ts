import {Component, OnInit} from '@angular/core';
import {CoursesServiceService} from './courses-service.service';

@Component({
selector: 'app-courses-mh',
template: `<h2>Angular 2 Course</h2>`
})
export class Courses1Component implements OnInit  {

  constructor(public _coursesServiceService: CoursesServiceService) {
      console.log('CoursesComponent constructor');
      console.log(' *******the courses list from Courses1Component is ******' + _coursesServiceService.getCourses());
      }

  ngOnInit(): void {
  }

}
