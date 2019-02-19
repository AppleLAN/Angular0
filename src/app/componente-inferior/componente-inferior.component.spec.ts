import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteInferiorComponent } from './componente-inferior.component';

describe('ComponenteInferiorComponent', () => {
  let component: ComponenteInferiorComponent;
  let fixture: ComponentFixture<ComponenteInferiorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteInferiorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteInferiorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
