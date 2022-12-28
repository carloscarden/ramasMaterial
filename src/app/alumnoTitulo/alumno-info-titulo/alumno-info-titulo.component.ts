import { Component, OnInit, Input } from '@angular/core';
import { AlumnoInfoTitulo } from 'src/app/_models/alumno-info-titulo';
import { BusquedaAlumnoTituloEstabService } from 'src/app/_services/busqueda-alumno-titulo-estab.service';

@Component({
  selector: 'app-alumno-info-titulo',
  templateUrl: './alumno-info-titulo.component.html',
  styleUrls: ['./alumno-info-titulo.component.scss']
})
export class AlumnoInfoTituloComponent implements OnInit {
  panelOpenState = true;

  @Input() idAlumnoEstabOferta: number;

  loading = false;
  alumnoInfoTitulo: AlumnoInfoTitulo;

  constructor(
    private busquedaAlumnoTituloEstabService: BusquedaAlumnoTituloEstabService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.busquedaAlumnoTituloEstabService.verAlumnoInfoTitulo(this.idAlumnoEstabOferta).subscribe({
      next: (v) => {
        this.alumnoInfoTitulo = v;
        this.loading = false;
      },
      error: (e) => {

        this.loading = false;
      }
    });
  }

}
