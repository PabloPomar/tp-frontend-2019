export class UserDescriptionModel {
  idDescripcion: Number;
  usuario : string;
  descripcion : string;
  likes : Number;
  dislikes: Number;
  fecha: Date;
  constructor(idDescripcion: Number, usuario: string, descripcion: string){
    this.idDescripcion = idDescripcion;
    this.usuario = usuario;
    this.descripcion = descripcion;
    this.likes = 0;
    this.dislikes= 0;
    this.fecha = new Date();
  }};
