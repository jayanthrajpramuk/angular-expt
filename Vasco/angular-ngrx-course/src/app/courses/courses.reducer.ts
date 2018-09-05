import { Action } from '@ngrx/store';
import {Course} from "./model/course";
import {CoursesActions, CoursesActionTypes} from "./courses.actions";


export interface CoursesState {
courseNick: string;
course: Course;
defaultCourse: string;
}

export const initialState: CoursesState = {
  defaultCourse : 'Basic Manners',
  courseNick: "Boo",
  course: undefined
};

export function reducer(state: CoursesState = initialState, action: CoursesActions): CoursesState {
  switch (action.type) {
    case  CoursesActionTypes.AddCourseAction: {
      return {
        courseNick: "heavy topic",
        course: action.payload,
        defaultCourse : undefined
      };
    }

    default:
      return state;
  }
}
