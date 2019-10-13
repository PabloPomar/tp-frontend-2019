import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiConnectionService} from '../api-connection.service';
import {Router, RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-poke-detalle',
  templateUrl: './poke-detalle.component.html',
  styleUrls: ['./poke-detalle.component.less']
})
export class PokeDetalleComponent implements OnInit {

  identificador: string;

  @Input() pokemon: any;
  isLoaded: number;

  constructor(private route: ActivatedRoute , protected apiConnection: ApiConnectionService , private router: Router) { }

  ngOnInit() {
    this.isLoaded = 0;
    this.identificador = this.route.snapshot.paramMap.get('id');
    this.apiConnection.getEspecificPokeByID(this.identificador).subscribe(
      (data) => {
        this.pokemon = data;
        this.isLoaded = 1;
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



}
