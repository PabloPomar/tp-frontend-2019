import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {throwError} from 'rxjs';
import {ApiBaseService} from "./api-base.service";

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService extends  ApiBaseService{

  constructor(protected http: HttpClient) {
    super();
  }

  baseURL = 'http://localhost:3000';


  getPokemon() {
    return this.http.get(this.baseURL + '/APIget/lista');
  }

  postDescription(poke: any) {
    console.log(poke);
    return this.http.post<any>(this.baseURL + '/APIpost/updateDescription2', poke)
      .pipe(catchError(this.handleError));
  }

  postDescriptionById(poke: any) {
    console.log(poke);
    return this.http.post<any>(this.baseURL + '/APIpost/updateDescription2', poke)
      .pipe(catchError(this.handleError));
  }

  getEspecificPoke(name: string) {
    return this.http.get(this.baseURL + '/APIget/name/' + name);
  }

  getEspecificPokeByID(id: string) {
    return this.http.get(this.baseURL + '/APIget/find/' + id);
  }



}
