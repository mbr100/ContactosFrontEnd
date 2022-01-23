import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./componenetes/inicio/inicio/inicio.component";
import {ListadoContactosComponent} from "./componenetes/contactos/listado-contactos/listado-contactos.component";
import {NuevoContactoComponent} from "./componenetes/contactos/nuevo-contacto/nuevo-contacto.component";

const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'contactos', component: ListadoContactosComponent },
    { path : 'contactos/nuevo', component: NuevoContactoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
