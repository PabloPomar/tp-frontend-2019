import { Component, OnInit } from '@angular/core';
import {ApiConnectionService} from "../api-connection.service";

@Component({
  selector: 'app-pagina-lista',
  templateUrl: './pagina-lista.component.html',
  styleUrls: ['./pagina-lista.component.less']
})
export class PaginaListaComponent implements OnInit {

  sorterValue : string;

  private pokemons: any;

  search : string;

  constructor(    protected apiConnection : ApiConnectionService) { }

  ngOnInit() {
    this.sorterValue = "nada";
    this.search= "nada";
    this.apiConnection.getPokemon().subscribe(
      (data) => {
        this.pokemons = data;
        this.sortById();
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
    if(this.sorterValue =="name") {
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

}
