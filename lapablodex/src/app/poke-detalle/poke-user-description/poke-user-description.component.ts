import {Component, Input, OnInit} from '@angular/core';
import {UserDescriptionModel} from "../../userDescription.model";
import DateTimeFormat = Intl.DateTimeFormat;

@Component({
  selector: 'app-poke-user-description',
  templateUrl: './poke-user-description.component.html',
  styleUrls: ['./poke-user-description.component.less']
})
export class PokeUserDescriptionComponent implements OnInit {

  @Input() user_description: any;

  description : UserDescriptionModel;

  constructor() { }

  ngOnInit() {
    this.description = new UserDescriptionModel( 0, 'nada', 'nada');
    this.description.usuario = this.user_description.usuario;
    this.description.likes = this.user_description.likes;
    this.description.descripcion = this.user_description.descripcion;
    this.description.dislikes = this.user_description.dislike;
    this.description.idDescripcion = this.user_description.idDescripcion;
    this.description.fecha = this.stringAsDate(this.user_description.fecha);
  }

  stringAsDate(dateStr: string) {
    return new Date(dateStr);
  }

}
