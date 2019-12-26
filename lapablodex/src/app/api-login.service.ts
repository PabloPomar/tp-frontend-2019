import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {throwError} from 'rxjs';
import { UsuarioModel} from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

  constructor(protected http: HttpClient) { }


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





  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
