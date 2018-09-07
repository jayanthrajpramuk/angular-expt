import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {CoursesService} from "../services/courses.service";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../reducers/index";
import {CourseAction, CoursesActions} from "../courses.actions";
import {getCourseNick, getCourseTitle} from "../course.selectors";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    promoTotal$: Observable<number>;

    beginnerCourses$: Observable<Course[]>;

    advancedCourses$: Observable<Course[]>;

  courseTitle$: Observable<string>;
  courseNick$: Observable<string>;


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
    // this courses will come from service. But to check in storage  and fire the service
      this.store.dispatch(new CourseAction(this.courses));

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

// below 2 variables are of type observable. so in html automatic changes will be seen when we
// have the value of the variable gets changed(when the title / nick gets changed in the store)
// Concept here is when the store state changes , since store is also of type observable these
// will be called and automatically the value of the variable will be changed and since we use
// async pipe it gets changed automatically.these select function will be registered.
        this.courseTitle$ = this.store.pipe(select(getCourseTitle));
        this.courseNick$ = this.store.pipe(select(getCourseNick));

             }

}
