export class VotoModel {
  id_pokemon : string;
  id_usuario : string;
  id_descipcion : string;


  constructor(id_pokemon: string, id_usuario: string, id_descipcion: string ){
    this.id_pokemon = id_pokemon;
    this.id_usuario = id_usuario;
    this.id_descipcion = id_descipcion;
  }};
