import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartExample1Component } from './chart-example1.component';

describe('ChartExample1Component', () => {
  let component: ChartExample1Component;
  let fixture: ComponentFixture<ChartExample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartExample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
