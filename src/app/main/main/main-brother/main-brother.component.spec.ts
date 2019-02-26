import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBrotherComponent } from './main-brother.component';

describe('MainBrotherComponent', () => {
  let component: MainBrotherComponent;
  let fixture: ComponentFixture<MainBrotherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBrotherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBrotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
