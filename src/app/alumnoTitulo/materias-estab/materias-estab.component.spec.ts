import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasEstabComponent } from './materias-estab.component';

describe('MateriasEstabComponent', () => {
  let component: MateriasEstabComponent;
  let fixture: ComponentFixture<MateriasEstabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriasEstabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasEstabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
