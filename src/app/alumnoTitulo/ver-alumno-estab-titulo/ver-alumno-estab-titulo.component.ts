import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-alumno-estab-titulo',
  templateUrl: './ver-alumno-estab-titulo.component.html',
  styleUrls: ['./ver-alumno-estab-titulo.component.scss']
})
export class VerAlumnoEstabTituloComponent implements OnInit {

  idAlumnoEstabOferta = 1426288;
  idAlumnoTitulo = 1744433;
  estadoTitulo = '';

  constructor() { }

  ngOnInit() {
    this.estadoTitulo = 'PROCESO FINALIZADO';
  }

}
