import {Component, Input, OnInit} from '@angular/core';
import {UserDescriptionModel} from "../../userDescription.model";
import DateTimeFormat = Intl.DateTimeFormat;
import {ActivatedRoute, Router} from "@angular/router";
import {ApiVotosService} from "../../api-votos.service";
import {VotoModel} from "../../voto.model";

@Component({
  selector: 'app-poke-user-description',
  templateUrl: './poke-user-description.component.html',
  styleUrls: ['./poke-user-description.component.less']
})
export class PokeUserDescriptionComponent implements OnInit {

  @Input() user_description: any;

  description : UserDescriptionModel;
  tipoUser: string;
  logged: string;
  username: string;
  currentId: string;
  voto: VotoModel;
  YaVoto: boolean;
  private newVoto: VotoModel;

  constructor(private router: Router, protected apiVotos: ApiVotosService) {
    this.voto = new VotoModel('nada', 'nada', 'nada');
  }

  ngOnInit() {
    this.description = new UserDescriptionModel( '0', 'nada', 'nada');
    this.readLocalStorageValueUserData();
    this.description.usuario = this.user_description.usuario;
    this.description.likes = this.user_description.likes;
    this.description.descripcion = this.user_description.descripcion;
    this.description.dislikes = this.user_description.dislike;
    this.description.idDescripcion = this.user_description.idDescripcion;
    this.description.fecha = this.stringAsDate(this.user_description.fecha);
    this.voto.id_pokemon = this.currentId;
    this.voto.id_descipcion = this.description.idDescripcion;
    this.voto.id_usuario = this.username;
    this.yaVotoComprobar();
  }

  stringAsDate(dateStr: string) {
    return new Date(dateStr);
  }

  readLocalStorageValueUserData() {
    this.tipoUser= localStorage.getItem('tipoUser');
    this.logged= localStorage.getItem('isLogedIn');
    this.username= localStorage.getItem('currentUser');
    this.currentId = localStorage.getItem('currentPokemonId');
  }

  aLogin() {
    this.router.navigate(['pagina-login']);
  }

  yaVotoComprobar(){
    this.apiVotos.yaVoto(this.voto).subscribe(
      (data) => {
        if (data === true) {
          this.YaVoto = true;
          console.log('Ya voto en '+ this.description.idDescripcion + ':'  + this.YaVoto);
        } else {
          this.YaVoto = false;
          console.log('Ya voto en '+ this.description.idDescripcion + ':'  + this.YaVoto);
        }
      } )
  }
  
  async agregarVoto() {
    this.newVoto = new VotoModel(this.currentId, this.username, this.description.idDescripcion);
    this.apiVotos.AgregarVoto(this.newVoto).subscribe();
    this.YaVoto = true;
  }

  aumentarLike() {
    this.apiVotos.aumentarLike(this.currentId, this.description.idDescripcion).subscribe();
  }

  aumentarDislike() {
    this.apiVotos.aumentarDislike(this.currentId, this.description.idDescripcion).subscribe();
  }

  likeEffect() {
    this.agregarVoto();
    this.aumentarLike();
    this.description.likes = this.description.likes+1 ;
  }

  dislikeEffect() {
    this.agregarVoto();
    this.aumentarDislike();
    this.description.dislikes = this.description.dislikes+1;
  }

  yaVotoAlert() {
    alert('Usted ya voto esta descripcion. No puede volver a votar.');
  }



}
