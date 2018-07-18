import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css']
})
export class CriteriaComponent implements OnInit , OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Simple Changes ", changes);
  }
  @Input() enteredValue: string;
  @Input() dynamicValue: string
  @Input() hitCount: string;
  @Input() parentChange: string;
  private _child: string;
  @Output() childChange: EventEmitter<string> =  new EventEmitter<string>();

  get ngModelchild() {
    return this._child;
  }

  set ngModelchild(value) {
    console.log("changed", value);
    this._child = value;
    this.childChange.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
