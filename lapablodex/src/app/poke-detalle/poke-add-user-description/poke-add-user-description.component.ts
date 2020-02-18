import { Component, OnInit } from '@angular/core';
import {ApiAgregarUserDescriptionService} from '../../api-agregar-user-description.service';
import {UserDescriptionModel2} from '../../userDescription2.model';
import {PersistencesService} from '../../persistences.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-poke-add-user-description',
  templateUrl: './poke-add-user-description.component.html',
  styleUrls: ['./poke-add-user-description.component.less']
})
export class PokeAddUserDescriptionComponent implements OnInit {

  userDescription: UserDescriptionModel2;
  tipoUser: string;
  logged: boolean;
  username: string;
  currentId: string;


  constructor( private router: Router, protected apiUserDescription: ApiAgregarUserDescriptionService ,
               protected apiPersistense: PersistencesService) {
    this.userDescription = new UserDescriptionModel2('nada', 'nadie' , 'Agrege su descripcion aqui', 'nada');
  }

  ngOnInit() {
    this.readUserData();
    this.userDescription.usuario = this.username;
    this.userDescription.idPokemon = this.currentId;
    this.searchProxNum();

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

  async agregarUserDescription() {
    await this.apiUserDescription.AgregarUserDescription(this.userDescription).toPromise();
    this.refresh();
  }


  searchProxNum() {
    this.apiUserDescription.proxNum(this.currentId).subscribe(
      (data) => {
        console.log('Proximo Numero: ' + data);
        this.userDescription.idDescripcion = JSON.stringify(data);
      },
      (error) => {
        console.error(error);
      }
    );

  }

  asyncserchforProxNum() {
    this.apiUserDescription.proxNum(this.currentId).toPromise().then(
      data => {
        console.log('Proximo Numero: ' + data);
        this.userDescription.idDescripcion = JSON.stringify(data);
      }
    );
  }

   refresh(): void {
     this.router.navigate(['listado']);
  }

}
