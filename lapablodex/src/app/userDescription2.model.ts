export class UserDescriptionModel2 {
  idPokemon : string;
  idDescripcion: string;
  usuario : string;
  descripcion : string;
  likes : number;
  dislike: number;
  fecha: Date;
  constructor(idDescripcion: string, usuario: string, descripcion: string, idPokemon: string){
    this.idPokemon = idPokemon;
    this.idDescripcion = idDescripcion;
    this.usuario = usuario;
    this.descripcion = descripcion;
    this.likes = 0;
    this.dislike = 0;
    this.fecha = new Date();
  }};
