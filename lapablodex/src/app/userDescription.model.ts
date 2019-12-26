export class UserDescriptionModel {
  idDescripcion: string;
  usuario: string;
  descripcion: string;
  likes: number;
  dislikes: number;
  fecha: Date;
  constructor(idDescripcion: string, usuario: string, descripcion: string) {
    this.idDescripcion = idDescripcion;
    this.usuario = usuario;
    this.descripcion = descripcion;
    this.likes = 0;
    this.dislikes = 0;
    this.fecha = new Date();
  }}
