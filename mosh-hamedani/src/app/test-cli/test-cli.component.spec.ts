import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCliComponent } from './test-cli.component';

describe('TestCliComponent', () => {
  let component: TestCliComponent;
  let fixture: ComponentFixture<TestCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
