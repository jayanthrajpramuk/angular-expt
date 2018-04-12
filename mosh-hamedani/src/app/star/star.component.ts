import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

@Input() public isFav = true;
@Input() public jayanth = 'Jayanth';
title = 'star component';
@Input() public obj;

@Input('star-name') public starName;

@Output('change') public changeEmitter = new EventEmitter();

 public clickStar() {
  this.isFav = !this.isFav;
  this.changeEmitter.emit(this.isFav);
}


public getobjJSON() {
return JSON.stringify(this.obj);
}

  constructor() { }

  ngOnInit() {
  }

}
