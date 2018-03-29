import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {FormPoster} from '../service/form-poster.servcie';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

powers = [/*'Really Smart', 'Super Flexible', 'Blazing Fire', 'Smasher'*/];
model = new Hero('Jonny Blaze', 18, this.powers[2], 'W2', true, 'Dark Red -Yellow', 'What ego' +
 ' is ?');
  ngb = {
    left: false,
    middle: false,
    right: false
  };
iteratorValidator = true;

objectIterator = [{id: '1', name: 'Horse'}, {id: '2', name: 'Harley Davidson'}];

// need to know what these fields are used.
  submitted = false;

   onSubmit(form: NgForm) {
   console.log('Hero Form Submitted !!');
     this._formPoster.postEmployeeService(this.model).subscribe(
     data => console.log(data),
     err => console.log(err)
     );
   this.submitted = true;
   }

  onObjectIteratorChange(event) {
  if (event === 'selectMode') {
    this.iteratorValidator = true;
  } else {
    this.iteratorValidator = false;
  }
  console.log('Value Changed!' + event.name);
  }

   // TODO: Remove this when we're done
   get diagnostic() { return JSON.stringify(this.model); }

  onChange(value: string) {
  this.model.superCostume = value.toUpperCase();
  }

  constructor(private _formPoster: FormPoster) {
    this._formPoster.getPower().subscribe(
      data => {
        console.log('Fetch Data is from component ' + data);
        this.powers = data.powers;
      },
        err => console.log(err)
        );
  }

  ngOnInit() {
  }



}
