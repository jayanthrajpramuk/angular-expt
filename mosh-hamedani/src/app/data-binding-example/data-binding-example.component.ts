import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-example',
  templateUrl: './data-binding-example.component.html',
  styleUrls: ['./data-binding-example.component.css']
})
export class DataBindingExampleComponent implements OnInit {
public title = 'This is angular Title';
public getTitle() {
return this.title;
}
  constructor() { }

  ngOnInit() {
  }

}
