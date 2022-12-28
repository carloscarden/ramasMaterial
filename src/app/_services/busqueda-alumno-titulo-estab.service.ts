import { Injectable } from '@angular/core';

import { HttpClient, HttpEvent, HttpRequest, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { AlumnoInfoTitulo } from '../_models/alumno-info-titulo';

@Injectable({
  providedIn: 'root'
})
export class BusquedaAlumnoTituloEstabService {

  urlTitulos = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  verAlumnoInfoTitulo(idAlumnoEstabOferta: number): Observable<AlumnoInfoTitulo> {
    return this.http.get<AlumnoInfoTitulo>
      (`${this.urlTitulos}/verAlumnoConSuInformacionDelTitulo/${idAlumnoEstabOferta}`);
  }

  recuperarMaterias(idAlumnoEstabOferta: number): Observable<any> {
    return this.http.get<any>
      (`${this.urlTitulos}/recuperarMateriasParaVerOCargar/${idAlumnoEstabOferta}`);
  }
}
