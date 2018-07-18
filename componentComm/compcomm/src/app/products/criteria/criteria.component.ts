import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
