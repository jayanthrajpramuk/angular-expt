import { Component } from '@angular/core';

@Component({
  selector: 'pm-component2',
  template : `<div>
    <h1>{{pageTitle2}}</h1>
    </div>`,
})

export class AppComponent2 {
  pageTitle2 : string = 'This is from Component 2 !';
}
