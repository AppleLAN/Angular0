import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteSuperiorComponent } from './componente-superior.component';

describe('ComponenteSuperiorComponent', () => {
  let component: ComponenteSuperiorComponent;
  let fixture: ComponentFixture<ComponenteSuperiorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteSuperiorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteSuperiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
