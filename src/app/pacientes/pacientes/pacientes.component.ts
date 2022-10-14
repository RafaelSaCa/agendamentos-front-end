import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Paciente } from './../model/paciente';
import { PacientesService } from './../services/pacientes.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

  pacientes: Observable<Paciente[]>;
  displayedColumns = ['nome','cpf','endereco','telefone'];

  constructor(private pacientesService: PacientesService) {
    this.pacientes = this.pacientesService.list();

  }


  ngOnInit(): void {}


}
