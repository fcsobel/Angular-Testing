import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLogin2Component } from './site-login2.component';

describe('SiteLogin2Component', () => {
  let component: SiteLogin2Component;
  let fixture: ComponentFixture<SiteLogin2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteLogin2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteLogin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
