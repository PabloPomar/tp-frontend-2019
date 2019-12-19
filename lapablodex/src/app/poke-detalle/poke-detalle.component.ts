import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiConnectionService} from '../api-connection.service';
import {Router, RouterModule, Routes} from '@angular/router';
import {ApiAgregarUserDescriptionService} from "../api-agregar-user-description.service";

@Component({
  selector: 'app-poke-detalle',
  templateUrl: './poke-detalle.component.html',
  styleUrls: ['./poke-detalle.component.less']
})
export class PokeDetalleComponent implements OnInit {

  identificador: string;
  descripciones_usuarios: any;
  @Input() pokemon: any;
  isLoaded: number;
  tipoUser: string;
  logged: string;
  username: string;
  sorterValue: string;
  yaPosteo : boolean;

  constructor(private route: ActivatedRoute , protected apiConnection: ApiConnectionService , private router: Router , protected apiUserDescription: ApiAgregarUserDescriptionService ) { }

  ngOnInit() {
    this.yaPosteo = false;
    this.sorterValue = 'nada';
    this.isLoaded = 0;
    this.readLocalStorageValueUserData();
    this.identificador = this.route.snapshot.paramMap.get('id');
    this.apiConnection.getEspecificPokeByID(this.identificador).subscribe(
      (data) => {
        this.pokemon = data;
        localStorage.setItem('currentPokemonId', this.pokemon.id);
        //console.log("Current pokemon id:" + localStorage.getItem('currentPokemonId'));
        this.descripciones_usuarios = this.pokemon.user_Description;
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

  readLocalStorageValueUserData() {
    this.tipoUser= localStorage.getItem('tipoUser');
    this.logged= localStorage.getItem('isLogedIn');
    this.username= localStorage.getItem('currentUser');
  }

  aLogin() {
    this.router.navigate(['pagina-login']);
  }

  aRegistrarUsuario() {
    this.router.navigate(['registro-Usuario']);
  }



  logOut() {
    localStorage.removeItem('isLogedIn');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('tipoUser');
    window.location.reload();
  }

  sortByLikes () {
    this.descripciones_usuarios.sort(function(a, b){return b.likes-a.likes});
  }

  sortByDate () {
    this.descripciones_usuarios.sort((a,b) => b.fecha.localeCompare(a.fecha));
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
      } )
  }

}
