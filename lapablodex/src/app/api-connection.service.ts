import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {pokeModelBase} from "./pokemonBaseModel";
import { catchError } from 'rxjs/operators';
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  constructor(protected http: HttpClient) { }

  baseURL = 'http://localhost:3000';


  getPokemon() {
    return this.http.get(this.baseURL + '/APIget/lista');
  }

  postDescription(poke : pokeModelBase) {
    console.log(poke);
    return this.http.post<pokeModelBase>(this.baseURL+'/APIpost/updateDescription2', poke)
      .pipe(catchError(this.handleError));
  }

  postDescriptionById(poke : any) {
    console.log(poke);
    return this.http.post<any>(this.baseURL+'/APIpost/updateDescription2', poke)
      .pipe(catchError(this.handleError));
  }

  getEspecificPoke(name : string) {
    return this.http.get(this.baseURL + '/APIget/name/' + name);
  }

  getEspecificPokeByID(id : string) {
    return this.http.get(this.baseURL + '/APIget/find/' + id);
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
  };

}
