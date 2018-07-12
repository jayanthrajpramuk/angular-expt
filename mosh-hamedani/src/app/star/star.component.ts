import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

@Input() public isFav = true;
@Input() public inputfromApp = 'Jayanth';
title = 'star component';
@Input() public obj;

@Input('star-name') public starName;

  @Input('valueFromParent') public valueFromParent;

@Output('change') public changeEmitter = new EventEmitter();
@Output('valueFromChildEvent') public valueFromChildEvent = new EventEmitter();
@Output('dynamicValueFromChild') public dynamicValueFromChild = new EventEmitter();

 public clickStar() {
  this.isFav = !this.isFav;
  this.changeEmitter.emit(this.isFav);
  this.valueFromChildEvent.emit(this.transformData());
}

public transformData() {
    return this.isFav ? '1' : '0';
}


public getobjJSON() {
return JSON.stringify(this.obj);
}

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes): void {
  console.log('** changes **' + changes);
  this.dynamicValueFromChild.emit(changes.valueFromParent.currentValue);
  }

}
