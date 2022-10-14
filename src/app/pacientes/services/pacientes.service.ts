import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

import { Paciente } from './../model/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  private readonly API = './././assets/pacientes.json';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Paciente[]>(this.API)
    .pipe(
      tap( pacientes => console.log(pacientes))
    )

  }
}