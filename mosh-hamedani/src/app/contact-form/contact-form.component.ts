import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  public firstName;
  public comment;
  public check;
  public radio;

  public commType = [{'id': '1', 'name': 'TV'}, {'id': '2', 'name': 'Radio'}];
  public selectedVal = 'ps';

  public onCLick(form, address) {
  console.log('****button***');
  console.log(this.firstName);
  console.log(this.comment);
    console.log('****button form value***');
    console.log(form);
    console.log(address);
  }

  public inputChanged(value) {
      console.log(value);
  }

  public formSubmitted(form) {
    console.log('form');
  console.log(form);
  }

  constructor() { }

  ngOnInit() {
  }

}
