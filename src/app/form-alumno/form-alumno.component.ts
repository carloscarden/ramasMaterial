import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';
import { Nacionalidad } from '../_models/nacionalidad';
import { OfertaEducativa } from '../_models/oferta-educativa';
import { Provincia } from '../_models/provincia';
import { SexoAlumno } from '../_models/sexo-alumno';
import { TipoDocumento } from '../_models/tipo-documento';
import { FormAlumnoServiceService } from '../_services/form-alumno-service.service';
import { LlenarForms } from './llenar-forms';
import { map, startWith } from 'rxjs/operators';

export interface DialogData {
  establecimiento: string;
}

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.scss']
})
export class FormAlumnoComponent implements OnInit {
  alumnoEncontrado = false;


  tiposDocumento: TipoDocumento[] = [];
  provincias: Provincia[] = [];
  sexoAlumno: SexoAlumno[] = [];
  ofertasEducativas: OfertaEducativa[] = [];
  nacionalidades: Nacionalidad[] = [];
  paises: any[] = [];
  filteredPaises: Observable<any[]>;

  myForm!: FormGroup;
  loadingAlumno = false;
  loadingCreacionModificacion = false;

  puedeCrearOModificar = true;
  alumnoEstabCreador = 0;
  idAlumno!: number;

  myControl = new FormControl('');

  constructor(
    public dialogRef: MatDialogRef<FormAlumnoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder,
    private formAlumnoService: FormAlumnoServiceService
  ) { }

  ngOnInit() {

    const dni = this.fb.group({
      tipoDni: ['', Validators.required],
      documento: ['', Validators.required],
    });

    const datosUsuario = this.fb.group({
      apellidos: ['', Validators.required],
      nombre: ['', Validators.required],
      nacionalidad: ['', Validators.required],
      sexo: ['', Validators.required],
      ofertasEducativas: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      ciudadNacimiento: ['', Validators.required],
      provinciaNacimiento: ['', Validators.required],
      pais: [''],
    });


    this.myForm = this.fb.group({
      dniCompleto: dni,
      usuario: datosUsuario,
    });
    const llenador = new LlenarForms();
    llenador.llenarDocumentos(this.tiposDocumento);
    llenador.llenarNacionalidad(this.nacionalidades);
    llenador.llenarOfertasEducativas(this.ofertasEducativas);
    llenador.llenarProvincias(this.provincias);
    llenador.llenarSexos(this.sexoAlumno);
    this.formAlumnoService.getCountries().subscribe({
      next: (v) => {
        console.log(v);
        this.paises = v.countries;
      },
      error: (e) => console.error(e),
    });
    console.log(this.myForm.controls);

    this.myForm.get('usuario').get('nacionalidad').valueChanges.subscribe(val => {
      console.log(val);
      if (val === 2) {
        console.log('otro');
        this.myForm.get('usuario').get('provinciaNacimiento').clearValidators();
        this.myForm.get('usuario').get('provinciaNacimiento').updateValueAndValidity();

        this.myForm.get('usuario').get('pais').setValidators(Validators.required);
        this.myForm.get('usuario').get('pais').updateValueAndValidity();
      } else {
        console.log('argentina');
        this.myForm.get('usuario').get('provinciaNacimiento').setValidators(Validators.required);
        this.myForm.get('usuario').get('provinciaNacimiento').updateValueAndValidity();

        this.myForm.get('usuario').get('pais').clearValidators();
        this.myForm.get('usuario').get('pais').updateValueAndValidity();
      }
    });

    this.filteredPaises =   this.myForm.get('usuario').get('pais').valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

  }

  private _filter(value: any) {
    console.log(value);
    const filterValue = value.toLowerCase();
    return this.paises.filter(option => option.name.toLowerCase().includes(filterValue));
  }
  paisOtro() {
    return this.myForm.get('usuario').get('nacionalidad').value === 2;


  }
  // convenience getter for easy access to form fields
  get user() {
    return this.myForm.controls.usuario;
  }

  get docu() {
    return this.myForm.controls.dniCompleto;
  }
  buscarAlumno() {

    this.alumnoEncontrado = true;
  }

  reset() {

  }



}

