import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosTituloComponent } from './datos-titulo.component';

describe('DatosTituloComponent', () => {
  let component: DatosTituloComponent;
  let fixture: ComponentFixture<DatosTituloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosTituloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
