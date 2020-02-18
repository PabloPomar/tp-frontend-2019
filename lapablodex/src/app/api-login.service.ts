import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { UsuarioModel} from './usuario.model';
import {ApiBaseService} from './api-base.service';

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService extends  ApiBaseService {

  constructor(protected http: HttpClient) {
    super();
  }


  baseURL = 'http://localhost:3000';


  userExist(user: string) {
    return this.http.get(this.baseURL + '/APIget/UserExist/' + user);
  }

  AgregarUsuario(user: UsuarioModel) {
    return this.http.post<UsuarioModel>(this.baseURL + '/APIpost/agregarUsuario', user)
      .pipe(catchError(ApiBaseService.handleError));
  }

  confirmarUsuario(user: UsuarioModel) {
    return this.http.get(this.baseURL + '/APIget/ConfirmarUser/' + user.usuario + '/' + user.password)
      .pipe(catchError(ApiBaseService.handleError));
  }

  obtenerTipoUsuario(user: UsuarioModel) {
    return this.http.get(this.baseURL + '/APIget/UsuarioEspecifico/' + user.usuario)
      .pipe(catchError(ApiBaseService.handleError));
  }

  obtenerClave() {
    return this.http.get(this.baseURL + '/APIget/getClave/')
      .pipe(catchError(ApiBaseService.handleError));
  }



}
