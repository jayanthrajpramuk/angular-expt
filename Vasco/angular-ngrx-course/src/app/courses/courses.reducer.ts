import { Action } from '@ngrx/store';
import {Course} from "./model/course";
import {CoursesActions, CoursesActionTypes} from "./courses.actions";


export interface CoursesState {
courseNick: string;
course: Course;
defaultCourse: string;
}

export const initialState: CoursesState = {
  defaultCourse: 'Basic Manners',
  courseNick: "Boo",
  course: {
    id: 0,
    iconUrl: "",
    courseListIcon: "",
    longDescription: "",
    category: "",
    lessonsCount: 0,
    promo: false,
    description: 'testing Desc'
  }
};

export function reducer(state: CoursesState = initialState, action: CoursesActions): CoursesState {
  switch (action.type) {
    case  CoursesActionTypes.AddCourseAction: {
      return {
        courseNick: "heavy topic",
        course: action.payload,
        defaultCourse : "NA"
      };
    }

    default:
      return state;
  }
}
