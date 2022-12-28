import { Injectable } from '@angular/core';

import { HttpClient, HttpEvent, HttpRequest, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormAlumnoServiceService {

  private jsonURL = 'assets/countries.json';


  constructor(private http: HttpClient) { }

  getCountries(): Observable<any> {
  return this.http.get<any>(`${this.jsonURL}`);
  }
}
