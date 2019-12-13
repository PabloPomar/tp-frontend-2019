export class UserDescriptionModel {
  idDescripcion: Number;
  usuario : string;
  descripcion : string;
  likes : Number;
  dislikes: Number;

  constructor(idDescripcion: Number, usuario: string, descripcion: string){
    this.idDescripcion = idDescripcion;
    this.usuario = usuario;
    this.descripcion = descripcion;
    this.likes = 0;
    this.dislikes= 0;
  }};
