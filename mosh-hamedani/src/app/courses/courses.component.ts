import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {CoursesServiceService} from '../courses-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public courseList;
  public title = 'League of Shadows 2';
  public path = './assets/los.png';
  public colspan = 20;
  public flag1 = false;
  public flag2 = true;
  public flag3 = true;
  public name;
  public rate = 12345;
  public veryLargeText = 'veryLargeTextveryLargeTextveryLargeTextveryLargeTextveryLargeTextveryLargeText';
  @Output() public change2 = new EventEmitter();

  public buttonClicked(event) {
    console.log(event.currentTarget.className);
    console.log('button clicked : ' + this.name);
    this.change2.emit('************************************************** courses component');
  }

  public submitVal(name) {
    console.log('enter presed : ' + name);
  }

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
