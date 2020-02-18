import { Component, OnInit } from '@angular/core';
import {ApiConnectionService} from '../api-connection.service';
import {Router, RouterModule, Routes} from '@angular/router';
import {PersistencesService} from "../persistences.service";

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

  logged: boolean;

  username: string;

  constructor(    protected apiConnection: ApiConnectionService, private router: Router,  protected apiPersistense: PersistencesService) { }

  ngOnInit() {
    this.readIfUserIsLoggedIn();
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
        if (data != null) {
          this.pokemons = data;
          this.sortById();
        } else {
          alert('No se ah encontrado ningun pokemon con ese nombre');
        }
      },
      (error) => {
        console.error(error);
      }
    );

  }



  readIfUserIsLoggedIn() {
    this.logged = this.apiPersistense.getIslogedIn();
    this.username = this.apiPersistense.getUserName();
    /*
    this.logged = localStorage.getItem('isLogedIn');
    this.username = localStorage.getItem('currentUser');
     */
  }

}
