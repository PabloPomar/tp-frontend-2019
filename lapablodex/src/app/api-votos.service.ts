import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {throwError} from 'rxjs';
import {VotoModel} from './voto.model';
import {UsuarioModel} from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ApiVotosService {

  constructor(protected http: HttpClient) {}

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
