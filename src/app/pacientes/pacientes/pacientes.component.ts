import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Paciente } from './../model/paciente';
import { PacientesService } from './../services/pacientes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

  pacientes$: Observable<Paciente[]>;
  displayedColumns = ['id','nome','cpf','endereco','telefone', 'actions'];

  constructor(
    private pacientesService: PacientesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.pacientes$ = this.pacientesService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar a listagem!');
        return of([])
      })
    );

  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {}

  onAdd(){
    this.router.navigate(['new'],{relativeTo: this.route});
  }


}
