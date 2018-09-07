 import {createSelector} from "@ngrx/store";
 export const selectCourseState = state => state.courses;

 export const getCourseTitle = createSelector(
   selectCourseState,
    courses => courses.courseNick
 );

 export const getCourseNick = createSelector(
   selectCourseState,
    courses => courses.course.description
 );
