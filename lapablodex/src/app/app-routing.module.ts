import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { ListaTestComponent} from "./lista-test/lista-test.component";
import { PostTestComponent} from "./post-test/post-test.component";
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PaginaListaComponent } from './pagina-lista/pagina-lista.component';


const routes: Routes = [
  {
    path: 'testLista',
    component:  ListaTestComponent
  },
  {
    path: 'principal',
    component:  PaginaPrincipalComponent
  },
  {
    path: 'testPost',
    component: PostTestComponent
  },
  {
    path: 'listado',
    component: PaginaListaComponent
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
