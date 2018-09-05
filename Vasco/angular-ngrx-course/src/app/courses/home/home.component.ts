import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {CoursesService} from "../services/courses.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../reducers/index";
import {CourseAction, CoursesActions} from "../courses.actions";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    promoTotal$: Observable<number>;

    beginnerCourses$: Observable<Course[]>;

    advancedCourses$: Observable<Course[]>;

    courses = {
          id: 1,
          description: "Intro to NgRx",
          iconUrl: "",
          courseListIcon: "",
          longDescription: "Basics of Ngrx",
          category: "Advanced",
          lessonsCount: 9,
          promo: false
    };

    constructor(private coursesService: CoursesService,
    // point 0 : store can be injected
    private store: Store<AppState>) {
     // point 1 ==>
      // this.store.subscribe(); should never do this. instead we should use dispatch action
     // method.
    }

  testCourseAction() {
  console.log(" -- in Course Action --");
  this.store.dispatch(new CourseAction(this.courses ));

  }

    ngOnInit() {

        const courses$ = this.coursesService.findAllCourses();

        this.beginnerCourses$ = courses$.pipe(
          map(courses => courses.filter(course => course.category === 'BEGINNER') )
        );

        this.advancedCourses$ = courses$.pipe(
            map(courses => courses.filter(course => course.category === 'ADVANCED') )
        );

        this.promoTotal$ = courses$.pipe(
            map(courses => courses.filter(course => course.promo).length)
        );

    }

}
