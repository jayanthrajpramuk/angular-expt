import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpExpComponent } from './http-exp.component';

describe('HttpExpComponent', () => {
  let component: HttpExpComponent;
  let fixture: ComponentFixture<HttpExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
