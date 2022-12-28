import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datos-titulo',
  templateUrl: './datos-titulo.component.html',
  styleUrls: ['./datos-titulo.component.scss']
})
export class DatosTituloComponent implements OnInit {
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
