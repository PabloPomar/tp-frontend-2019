import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistencesService {
  pokeId : string;
  tipoUser : string;
  currentUser: string;
  isLoggedIn: boolean;

  constructor() {
    this.isLoggedIn = false;
    this.currentUser = 'nadie';
    this.tipoUser = 'nada';
    this.pokeId = 'nada';
  }

  setPokeId(id: string) {
    this.pokeId = id;
  }

  setLoggedInTrue() {
    this.isLoggedIn= true;
  }

  setLoggedInFalse() {
    this.isLoggedIn= false;
  }

  setTipoUser (tipo : string) {
    this.tipoUser = tipo;
  }

  setTipoUserAsAdmin() {
    this.tipoUser = 'admin';
  }

  setTipoUserAsUser() {
   this.tipoUser = 'usuario'
  }

  setCurrentUser (nombre : string) {
    this.currentUser = nombre;
  }

  getTipoUser () {
    return this.tipoUser;
  }

  getUserName () {
    return this.currentUser;
  }

  getIslogedIn() {
    return this.isLoggedIn;
  }

  getPokeId() {
    return this.pokeId;
  }



}
