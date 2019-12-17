import { Component, OnInit } from '@angular/core';
import {ApiConnectionService} from '../api-connection.service';
import {Router, RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-pagina-lista',
  templateUrl: './pagina-lista.component.html',
  styleUrls: ['./pagina-lista.component.less']
})
export class PaginaListaComponent implements OnInit {

  sorterValue: string;

  pokemons: any;

  search: string;

  isLoaded: number;

  logged: string;

  username: string;

  constructor(    protected apiConnection: ApiConnectionService, private router: Router) { }

  ngOnInit() {
    this.readLocalStorageUserIsLoggedIn();
    this.isLoaded = 0;
    this.sorterValue = 'nada';
    this.search = 'nada';
    this.apiConnection.getPokemon().subscribe(
      (data) => {
        this.pokemons = data;
        this.sortById();
        this.isLoaded = 1;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  sortByName() {
    this.pokemons.sort((a, b) => a.name.localeCompare(b.name));
  }

  sortById() {
    this.pokemons.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
  }

  returnSortervalue() {
    console.log(this.sorterValue);
  }

  sortPage() {
    if (this.sorterValue === 'name') {
      this.sortByName();
    } else {
      this.sortById();
    }

  }

  refresh(): void {
    window.location.reload();
  }

  searchName() {
    this.apiConnection.getEspecificPoke(this.search).subscribe(
      (data) => {
        this.pokemons = data;
        this.sortById();
      },
      (error) => {
        console.error(error);
      }
    );

  }

  aLogin() {
    this.router.navigate(['pagina-login']);
  }

  aRegistrarUsuario() {
    this.router.navigate(['registro-Usuario']);
  }

  readLocalStorageUserIsLoggedIn() {
    this.logged= localStorage.getItem('isLogedIn');
    this.username= localStorage.getItem('currentUser');
  }

  logOut() {
    localStorage.removeItem('isLogedIn');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('tipoUser');
    window.location.reload();
  }

}
