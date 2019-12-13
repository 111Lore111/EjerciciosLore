import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarAlumnoComponent } from './guardar-alumno.component';

describe('GuardarAlumnoComponent', () => {
  let component: GuardarAlumnoComponent;
  let fixture: ComponentFixture<GuardarAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardarAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
