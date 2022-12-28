import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoInfoTituloComponent } from './alumno-info-titulo.component';

describe('AlumnoInfoTituloComponent', () => {
  let component: AlumnoInfoTituloComponent;
  let fixture: ComponentFixture<AlumnoInfoTituloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoInfoTituloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoInfoTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
