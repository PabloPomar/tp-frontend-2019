import { Component, OnInit } from '@angular/core';
import {ApiConnectionService} from "../api-connection.service";

@Component({
  selector: 'app-pagina-lista',
  templateUrl: './pagina-lista.component.html',
  styleUrls: ['./pagina-lista.component.less']
})
export class PaginaListaComponent implements OnInit {

  private pokemons: any;

  constructor(    protected apiConnection : ApiConnectionService) { }

  ngOnInit() {
    this.apiConnection.getPokemon().subscribe(
      (data) => {
        this.pokemons = data;
        console.log(data);
        console.log(this.pokemons);
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
