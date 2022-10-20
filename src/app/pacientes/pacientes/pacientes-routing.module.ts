import { PacienteFormComponent } from './../paciente-form/paciente-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PacientesComponent } from './pacientes.component';

const routes: Routes = [
  { path:'', component: PacientesComponent},
  { path:'new', component: PacienteFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule { }
