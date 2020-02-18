import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {UserDescriptionModel2} from './userDescription2.model';
import {ApiBaseService} from './api-base.service';


@Injectable({
  providedIn: 'root'
})
export class ApiAgregarUserDescriptionService extends  ApiBaseService {

  constructor(protected http: HttpClient) {
    super();
  }

  baseURL = 'http://localhost:3000';

  getYaPosteo(id: string, usuario: string) {
    return this.http.get(this.baseURL + '/APIget/YaPosteo/' + id + '/' + usuario);
  }

  AgregarUserDescription(desc: UserDescriptionModel2) {
    return this.http.post<UserDescriptionModel2>(this.baseURL + '/APIpost/agregarUserDesc', desc)
      .pipe(catchError(ApiBaseService.handleError));
  }

  proxNum(id: string) {
    return this.http.get(this.baseURL + '/APIget/proxNum/' + id);
  }


  BorrarUserDescription(desc: UserDescriptionModel2) {
    return this.http.post<UserDescriptionModel2>(this.baseURL + '/APIdelete/BorrarUserDesc', desc)
      .pipe(catchError(ApiBaseService.handleError));
  }


  BorrarVotos(desc: UserDescriptionModel2) {
    return this.http.delete(this.baseURL + '/APIdelete/BorrarVotos/' + desc.idPokemon + '/' + desc.idDescripcion)
      .pipe(catchError(ApiBaseService.handleError));
  }


}
