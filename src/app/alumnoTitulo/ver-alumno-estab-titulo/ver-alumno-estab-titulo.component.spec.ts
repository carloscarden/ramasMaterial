import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAlumnoEstabTituloComponent } from './ver-alumno-estab-titulo.component';

describe('VerAlumnoEstabTituloComponent', () => {
  let component: VerAlumnoEstabTituloComponent;
  let fixture: ComponentFixture<VerAlumnoEstabTituloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerAlumnoEstabTituloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerAlumnoEstabTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
