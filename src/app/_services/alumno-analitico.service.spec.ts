import { TestBed } from '@angular/core/testing';

import { AlumnoAnaliticoService } from './alumno-analitico.service';

describe('AlumnoAnaliticoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlumnoAnaliticoService = TestBed.get(AlumnoAnaliticoService);
    expect(service).toBeTruthy();
  });
});
