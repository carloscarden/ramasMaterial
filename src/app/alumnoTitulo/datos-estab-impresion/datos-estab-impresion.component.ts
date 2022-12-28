import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datos-estab-impresion',
  templateUrl: './datos-estab-impresion.component.html',
  styleUrls: ['./datos-estab-impresion.component.scss']
})
export class DatosEstabImpresionComponent implements OnInit {

  formTitulo!: FormGroup;
  constructor(

    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.formTitulo = this.fb.group({
      fechaDeEgreso: '',
      promedio: '',
      promedioReal: '',
      validezNacional: '',
      numeroRfifd: '',
      libroMatrizNro: '',
      actaNro: '',
      folioNro: '',
      observaciones: '',
    });
  }

}
