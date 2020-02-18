export class VotoModel {
  idpokemon: string;
  idusuario: string;
  iddescipcion: string;


  constructor(idpokemon: string, idusuario: string, iddescipcion: string ) {
    this.idpokemon = idpokemon;
    this.idusuario = idusuario;
    this.iddescipcion = iddescipcion;
  }
}
