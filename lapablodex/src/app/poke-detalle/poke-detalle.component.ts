import {Component, Input, NgModule, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiConnectionService} from '../api-connection.service';
import {Router, RouterModule, Routes} from '@angular/router';
import {ApiAgregarUserDescriptionService} from '../api-agregar-user-description.service';
import {PersistencesService} from "../persistences.service";


@Component({
  selector: 'app-poke-detalle',
  templateUrl: './poke-detalle.component.html',
  styleUrls: ['./poke-detalle.component.less']
})
export class PokeDetalleComponent implements OnInit {

  identificador: string;
  descripcionesUsuarios: any;
  @Input() pokemon: any;
  isLoaded: number;
  tipoUser: string;
  logged: boolean;
  username: string;
  sorterValue: string;
  yaPosteo: boolean;

  constructor(private route: ActivatedRoute , protected apiConnection: ApiConnectionService ,
              private router: Router , protected apiUserDescription: ApiAgregarUserDescriptionService, protected apiPersistense: PersistencesService ) { }

  ngOnInit() {
    this.yaPosteo = false;
    this.sorterValue = 'nada';
    this.isLoaded = 0;
    this.readUserData();
    this.identificador = this.route.snapshot.paramMap.get('id');
    this.apiConnection.getEspecificPokeByID(this.identificador).subscribe(
      (data) => {
        this.pokemon = data;
        this.apiPersistense.setPokeId(this.pokemon.id);
        //localStorage.setItem('currentPokemonId', this.pokemon.id);
        // console.log("Current pokemon id:" + localStorage.getItem('currentPokemonId'));
        this.descripcionesUsuarios = this.pokemon.user_Description;
        this.sortByLikes();
        this.isLoaded = 1;
        this.checkIfYaPosteo();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  editarDesc() {
    this.apiConnection.postDescriptionById(this.pokemon).subscribe();
  }

  aListado() {
    this.router.navigate(['listado']);
  }

  readUserData() {
    this.tipoUser = this.apiPersistense.getTipoUser();
    this.logged = this.apiPersistense.getIslogedIn();
    this.username = this.apiPersistense.getUserName();
    /*
    this.tipoUser = localStorage.getItem('tipoUser');
    this.logged = localStorage.getItem('isLogedIn');
    this.username = localStorage.getItem('currentUser');
     */
  }



  sortByLikes() {
    this.descripcionesUsuarios.sort((a, b) =>  b.likes - a.likes );
  }

  sortByDate() {
    this.descripcionesUsuarios.sort((a, b) => b.fecha.localeCompare(a.fecha));
  }

  sortPage() {
    if (this.sorterValue === 'likes') {
      this.sortByLikes();
    } else {
      this.sortByDate();
    }

  }

  checkIfYaPosteo() {
    this.apiUserDescription.getYaPosteo(this.pokemon.id, this.username).subscribe(
      (data) => {
        if (data === true) {
          this.yaPosteo = true;
          console.log('Ya posteo');
        } else {
          this.yaPosteo = false;
          console.log('No posteo');
        }
      } );
  }

}
