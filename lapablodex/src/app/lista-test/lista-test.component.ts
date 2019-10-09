import { Component, OnInit } from '@angular/core';
import {ApiConnectionService} from "../api-connection.service";

@Component({
  selector: 'app-lista-test',
  templateUrl: './lista-test.component.html',
  styleUrls: ['./lista-test.component.less']
})
export class ListaTestComponent implements OnInit {
  private pokemons: any;


  constructor(
    protected apiConnection : ApiConnectionService
  ) { }

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
