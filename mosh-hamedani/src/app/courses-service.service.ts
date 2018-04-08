import { Injectable } from '@angular/core';

@Injectable()
export class CoursesServiceService {

getCourses() {
console.log('In service Component');
return ['Angular 2', 'TypeScript', 'Webpack', 'npm'];
}

  constructor() { }

}
