import { Action } from '@ngrx/store';
import {Course} from "./model/course";



export enum CoursesActionTypes {
  AddCourseAction = '[CourseAction] Course Action',
}

export class CourseAction implements Action {
  readonly type = CoursesActionTypes.AddCourseAction;
  constructor(public payload: Course) {
  }
}

export type CoursesActions = CourseAction;
