import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBrother2Component } from './main-brother2.component';

describe('MainBrother2Component', () => {
  let component: MainBrother2Component;
  let fixture: ComponentFixture<MainBrother2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBrother2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBrother2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
