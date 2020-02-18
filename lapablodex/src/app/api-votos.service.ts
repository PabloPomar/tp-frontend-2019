import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {throwError} from 'rxjs';
import {VotoModel} from './voto.model';
import {UsuarioModel} from './usuario.model';
import {ApiBaseService} from "./api-base.service";

@Injectable({
  providedIn: 'root'
})
export class ApiVotosService extends ApiBaseService{

  constructor(protected http: HttpClient) {
    super();}

  baseURL = 'http://localhost:3000';

  yaVoto(voto: VotoModel) {
    return this.http.get(this.baseURL + '/APIget/YaVoto/' + voto.idpokemon + '/' + voto.idusuario + '/' + voto.iddescipcion);
  }

  AgregarVoto(voto: VotoModel) {
    console.log(voto);
    return this.http.post<VotoModel>(this.baseURL + '/APIpost/agregarVoto', voto)
      .pipe(catchError(this.handleError));
  }



  aumentarLike(id: string, idDesc: string) {
    return this.http.get(this.baseURL + '/APIpost/aumentarLike/'  + id + '/' + idDesc);
  }

  aumentarDislike(id: string, idDesc: string) {
    return this.http.get(this.baseURL + '/APIpost/aumentarDislike/' + id + '/' + idDesc);
  }



}
