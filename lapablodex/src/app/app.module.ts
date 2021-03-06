import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ApiConnectionService} from './api-connection.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { DexGifComponent } from './pagina-principal/dex-gif/dex-gif.component';
import { PaginaListaComponent } from './pagina-lista/pagina-lista.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PokeTarjetaComponent } from './pagina-lista/poke-tarjeta/poke-tarjeta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokeDetalleComponent } from './poke-detalle/poke-detalle.component';
import { RegistroDeUsuarioComponent } from './Systema-Login/registro-de-usuario/registro-de-usuario.component';
import { PaginaLoginComponent } from './Systema-Login/pagina-login/pagina-login.component';
import { LoginGoogleComponent } from './Systema-Login/pagina-login/login-google/login-google.component';
import { PokeUserDescriptionComponent } from './poke-detalle/poke-user-description/poke-user-description.component';
import { PokeAddUserDescriptionComponent } from './poke-detalle/poke-add-user-description/poke-add-user-description.component';
import { BotonesLoginComponent } from './botones-login/botones-login.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    DexGifComponent,
    PaginaListaComponent,
    PokeTarjetaComponent,
    PokeDetalleComponent,
    RegistroDeUsuarioComponent,
    PaginaLoginComponent,
    LoginGoogleComponent,
    PokeUserDescriptionComponent,
    PokeAddUserDescriptionComponent,
    BotonesLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [ApiConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
