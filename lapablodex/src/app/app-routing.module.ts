import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PaginaListaComponent } from './pagina-lista/pagina-lista.component';
import { PokeDetalleComponent } from './poke-detalle/poke-detalle.component';
import { RegistroDeUsuarioComponent } from './Systema-Login/registro-de-usuario/registro-de-usuario.component';
import { PaginaLoginComponent } from './Systema-Login/pagina-login/pagina-login.component';

const routes: Routes = [
  {
    path: 'principal',
    component:  PaginaPrincipalComponent
  },
  {
    path: 'listado',
    component: PaginaListaComponent
  },
  {
    path: 'detalle/:id',
    component: PokeDetalleComponent
  },
  {
    path: 'registro-Usuario',
    component: RegistroDeUsuarioComponent
  },
  {
    path: 'pagina-login',
    component: PaginaLoginComponent
  },
  {
    path: '**',
    redirectTo: 'principal'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
