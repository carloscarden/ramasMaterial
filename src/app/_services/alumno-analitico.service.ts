import { Injectable } from '@angular/core';

import { HttpClient, HttpEvent, HttpRequest, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { AlumnoInfoTitulo } from '../_models/alumno-info-titulo';

@Injectable({
  providedIn: 'root'
})
export class AlumnoAnaliticoService {

  urlTitulos = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }



  recuperarMaterias(idAlumnoEstabOferta: number): Observable<any> {
    return this.http.get<any>
      (`${this.urlTitulos}/recuperarMateriasParaVerOcargar/${idAlumnoEstabOferta}`);
  }
}
