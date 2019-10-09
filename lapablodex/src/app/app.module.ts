import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ApiConnectionService} from "./api-connection.service";
import {HttpClientModule} from "@angular/common/http";
import { ListaTestComponent } from './lista-test/lista-test.component';
import { PostTestComponent } from './post-test/post-test.component';
import {FormsModule} from "@angular/forms";
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { DexGifComponent } from './pagina-principal/dex-gif/dex-gif.component';
import { PaginaListaComponent } from './pagina-lista/pagina-lista.component';
import {ReactiveFormsModule} from "@angular/forms";
import { PokeTarjetaComponent } from './pagina-lista/poke-tarjeta/poke-tarjeta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListaTestComponent,
    PostTestComponent,
    PaginaPrincipalComponent,
    DexGifComponent,
    PaginaListaComponent,
    PokeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [ApiConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
