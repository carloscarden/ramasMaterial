import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosEstabImpresionComponent } from './datos-estab-impresion.component';

describe('DatosEstabImpresionComponent', () => {
  let component: DatosEstabImpresionComponent;
  let fixture: ComponentFixture<DatosEstabImpresionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosEstabImpresionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosEstabImpresionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
