import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { PacientesService } from './../services/pacientes.service';


@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.scss']
})
export class PacienteFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder : FormBuilder,
     private service: PacientesService,
     private snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      nome: [null],
      cpf: [null],
      endereco: [null],
      telefone: [null],
    });
   }

  ngOnInit(): void {}

  onSubmit(){
    this.service.save(this.form.value).subscribe(result => console.log(result), error => this.onError());
  }

  onCancel(){

  }

  private onError(){
    this.snackBar.open('Erro ao cadastrar Paciente.', '',{duration: 3000});
  }
}
