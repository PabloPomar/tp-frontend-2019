import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {throwError} from 'rxjs';
import {VotoModel} from './voto.model';
import {UserDescriptionModel2} from './userDescription2.model';


@Injectable({
  providedIn: 'root'
})
export class ApiAgregarUserDescriptionService {

  constructor(protected http: HttpClient) { }

  baseURL = 'http://localhost:3000';

  getYaPosteo(id: string, usuario: string) {
    return this.http.get(this.baseURL + '/APIget/YaPosteo/' + id + '/' + usuario);
  }

  AgregarUserDescription(desc: UserDescriptionModel2) {
    console.log(desc);
    return this.http.post<UserDescriptionModel2>(this.baseURL + '/APIpost/agregarUserDesc', desc)
      .pipe(catchError(this.handleError));
  }

  proxNum(id: string) {
    return this.http.get(this.baseURL + '/APIget/proxNum/' + id);
  }

  BorrarUserDescription(desc: UserDescriptionModel2) {
    console.log(desc);
    return this.http.post<UserDescriptionModel2>(this.baseURL + '/APIpost/BorrarUserDesc', desc)
      .pipe(catchError(this.handleError));
  }

  BorrarVotos(desc: UserDescriptionModel2) {
    console.log(desc);
    return this.http.post<UserDescriptionModel2>(this.baseURL + '/APIpost/BorrarVotos', desc)
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
