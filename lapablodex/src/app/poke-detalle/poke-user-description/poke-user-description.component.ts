import {Component, Input, OnInit} from '@angular/core';
import {UserDescriptionModel} from '../../userDescription.model';
import DateTimeFormat = Intl.DateTimeFormat;
import {ActivatedRoute, Router} from '@angular/router';
import {ApiVotosService} from '../../api-votos.service';
import {VotoModel} from '../../voto.model';
import {ApiAgregarUserDescriptionService} from '../../api-agregar-user-description.service';
import {UserDescriptionModel2} from '../../userDescription2.model';
import {__await} from 'tslib';
import {PersistencesService} from "../../persistences.service";

@Component({
  selector: 'app-poke-user-description',
  templateUrl: './poke-user-description.component.html',
  styleUrls: ['./poke-user-description.component.less']
})
export class PokeUserDescriptionComponent implements OnInit {

  @Input() userDescription: any;

  description: UserDescriptionModel;
  tipoUser: string;
  logged: boolean;
  username: string;
  currentId: string;
  voto: VotoModel;
  YaVoto: boolean;
  private newVoto: VotoModel;
  deleter: UserDescriptionModel2;

  constructor(private router: Router, protected apiVotos: ApiVotosService, protected apiDelete: ApiAgregarUserDescriptionService , protected apiPersistense: PersistencesService) {
    this.voto = new VotoModel('nada', 'nada', 'nada');
    this.deleter = new UserDescriptionModel2('nada', 'nadie' , 'Agrege su descripcion aqui', 'nada');
  }

  ngOnInit() {
    this.description = new UserDescriptionModel( '0', 'nada', 'nada');
    this.readUserData();
    this.description.usuario = this.userDescription.usuario;
    this.description.likes = this.userDescription.likes;
    this.description.descripcion = this.userDescription.descripcion;
    this.description.dislikes = this.userDescription.dislike;
    this.description.idDescripcion = this.userDescription.idDescripcion;
    this.description.fecha = this.stringAsDate(this.userDescription.fecha);
    this.deleter.usuario = this.userDescription.usuario;
    this.deleter.likes = this.userDescription.likes;
    this.deleter.descripcion = this.userDescription.descripcion;
    this.deleter.dislike = this.userDescription.dislike;
    this.deleter.idDescripcion = this.userDescription.idDescripcion;
    this.deleter.fecha = this.stringAsDate(this.userDescription.fecha);
    this.deleter.idPokemon = this.currentId;
    this.voto.idpokemon = this.currentId;
    this.voto.iddescipcion = this.description.idDescripcion;
    this.voto.idusuario = this.username;
    this.yaVotoComprobar();
  }

  stringAsDate(dateStr: string) {
    return new Date(dateStr);
  }

    readUserData() {
      this.tipoUser = this.apiPersistense.getTipoUser();
      this.logged = this.apiPersistense.getIslogedIn();
      this.username = this.apiPersistense.getUserName();
      this.currentId = this.apiPersistense.getPokeId();
      /*
      this.tipoUser = localStorage.getItem('tipoUser');
      this.logged = localStorage.getItem('isLogedIn');
      this.username = localStorage.getItem('currentUser');
      this.currentId = localStorage.getItem('currentPokemonId');
       */
    }

    aLogin() {
    this.router.navigate(['pagina-login']);
  }

  yaVotoComprobar() {
    this.apiVotos.yaVoto(this.voto).subscribe(
      (data) => {
        if (data === true) {
          this.YaVoto = true;
          console.log('Ya voto en ' + this.description.idDescripcion + ':'  + this.YaVoto);
        } else {
          this.YaVoto = false;
          console.log('Ya voto en ' + this.description.idDescripcion + ':'  + this.YaVoto);
        }
      } );
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
    this.description.likes = this.description.likes + 1 ;
  }

  dislikeEffect() {
    this.agregarVoto();
    this.aumentarDislike();
    this.description.dislikes = this.description.dislikes + 1;
  }

  yaVotoAlert() {
    alert('Usted ya voto esta descripcion. No puede volver a votar.');
  }

  async borrado() {
    this.apiDelete.BorrarUserDescription(this.deleter).toPromise();
    this.apiDelete.BorrarVotos(this.deleter).toPromise();
  }

  async borrado2() {
    this.borrado();
    this.refresh();

  }


  async refresh() {
    this.router.navigate(['listado']);
  }

}
