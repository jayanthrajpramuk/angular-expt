import { Component, OnInit } from '@angular/core';
import { CoursesServiceService } from '../courses-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

public courseList ;
public trackByFn(index, item) {
console.log('this is getting called !' + index + item);
}

  constructor(public _coursesServiceService: CoursesServiceService) {
    console.log('CoursesComponent constructor');
    console.log('the c;ourses list is ' + _coursesServiceService.getCourses());
  this.courseList = _coursesServiceService.getCourses();

  }

  ngOnInit() {
    console.log('CoursesComponent ngOnInit');
  }

}
