import { Action } from '@ngrx/store';
import {Course} from "./model/course";



export enum CoursesActionTypes {
  AddCourseAction = '[CourseAction] Course Action',
  ClearAllCoursesAction = '[ClearAllCourses] ClearAllCourses Action'
}

export class CourseAction implements Action {
  readonly type = CoursesActionTypes.AddCourseAction;
  constructor(public payload: Course) {
  }
}
export class ClearAllCoursesAction implements Action {
  readonly type = CoursesActionTypes.ClearAllCoursesAction;
}

export type CoursesActions = CourseAction | ClearAllCoursesAction;
