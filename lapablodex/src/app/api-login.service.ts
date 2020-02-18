import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {throwError} from 'rxjs';
import { UsuarioModel} from './usuario.model';
import {ApiBaseService} from "./api-base.service";

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService extends  ApiBaseService{

  constructor(protected http: HttpClient) {
    super();
  }


  baseURL = 'http://localhost:3000';


  userExist(user: string) {
    return this.http.get(this.baseURL + '/APIget/UserExist/' + user);
  }

  AgregarUsuario(user: UsuarioModel) {
    console.log(user);
    return this.http.post<UsuarioModel>(this.baseURL + '/APIpost/agregarUsuario', user)
      .pipe(catchError(this.handleError));
  }

  confirmarUsuario(user: UsuarioModel) {
    // console.log(user);
    return this.http.get(this.baseURL + '/APIget/ConfirmarUser/' + user.usuario + '/' + user.password)
      .pipe(catchError(this.handleError));
  }

  obtenerTipoUsuario(user: UsuarioModel) {
    // console.log(user);
    return this.http.get(this.baseURL + '/APIget/UsuarioEspecifico/' + user.usuario)
      .pipe(catchError(this.handleError));
  }

  obtenerClave() {
    return this.http.get(this.baseURL + '/APIget/getClave/')
      .pipe(catchError(this.handleError));
  }



}
