import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialTableComponent } from './material-table/material-table.component';
import { RamasComponent } from './ramas/ramas.component';
import { FormAlumnoComponent } from './form-alumno/form-alumno.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { VerAlumnoEstabTituloComponent } from './alumnoTitulo/ver-alumno-estab-titulo/ver-alumno-estab-titulo.component';
import { ObservacionesComponent } from './alumnoTitulo/observaciones/observaciones.component';
import { MateriasEstabComponent } from './alumnoTitulo/materias-estab/materias-estab.component';
import { AlumnoInfoTituloComponent } from './alumnoTitulo/alumno-info-titulo/alumno-info-titulo.component';
import { DatosEstabImpresionComponent } from './alumnoTitulo/datos-estab-impresion/datos-estab-impresion.component';
import { DatosTituloComponent } from './alumnoTitulo/datos-titulo/datos-titulo.component';
import { MatRadioModule } from '@angular/material/radio';
import {MatSortModule} from '@angular/material/sort';
import { SortTableComponent } from './sort-table/sort-table.component';


@NgModule({
  declarations: [
    AppComponent,
    MaterialTableComponent,
    RamasComponent,
    FormAlumnoComponent,
    VerAlumnoEstabTituloComponent,
    ObservacionesComponent,
    MateriasEstabComponent,
    AlumnoInfoTituloComponent,
    DatosEstabImpresionComponent,
    DatosTituloComponent,
    SortTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatTableModule,
    MatTabsModule,
    MatSelectModule,
    MatTooltipModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSortModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,

    OwlDateTimeModule,
    OwlNativeDateTimeModule,

  ],
  providers: [
    MatDatepickerModule,
    { provide: OWL_DATE_TIME_LOCALE, useValue: 'es-AR' },
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    FormAlumnoComponent,
  ]
})
export class AppModule { }
