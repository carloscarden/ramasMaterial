import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormAlumnoComponent } from '../form-alumno/form-alumno.component';


export interface Puntaje {
  nombre: string;
  puntuacion: number;
}


export interface Puntaje2 extends Puntaje {
  propiedadPuntaje2: string;
}

export interface Puntaje3 extends Puntaje {
  propiedadPuntaje3: string;
}

export interface Rama {
  nombre: string;
  puntajes: any[];
}





@Component({
  selector: 'app-ramas',
  templateUrl: './ramas.component.html',
  styleUrls: ['./ramas.component.scss']
})
export class RamasComponent implements OnInit {

  elements: Rama[] = [
    {
      nombre: 'SUPERIOR',
      puntajes: [
        { nombre: 'puntaje1', puntuacion: 5 },
        { nombre: 'puntaje2', puntuacion: 5 }
      ]
    },
    { nombre: 'ARTISTICA', puntajes: [{ nombre: 'puntaje2', puntuacion: 5 }] },
    { nombre: 'EDUCACION FISICA', puntajes: [{ nombre: 'puntaje3', puntuacion: 5 }] },

  ];

  displayedColumns = ['nombre', 'puntuacion'];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }


  propiedades(puntaje) {
    return Object.keys(puntaje);
  }

  crearAlumno() {
    this.dialog.open(FormAlumnoComponent, {
      autoFocus: false,
      maxWidth: '140vh',
      maxHeight: '100vh', // you can adjust the value as per your view
      data: {
        establecimiento: '000MS000000'
      },
    });
  }

}
