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

@Output() public change = new EventEmitter();
  @Output() public change2 = new EventEmitter();
  @Output() public change3 = new EventEmitter();


public clickStar() {
  this.isFav = !this.isFav;
  this.change.emit(this.isFav);
  this.change2.emit(this.isFav);
  this.change3.emit(this.isFav);
}

public getobjJSON() {
return JSON.stringify(this.obj);
}

  constructor() { }

  ngOnInit() {
  }

}
