import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Router, RouterModule, Routes} from '@angular/router';
@Component({
  selector: 'app-poke-tarjeta',
  templateUrl: './poke-tarjeta.component.html',
  styleUrls: ['./poke-tarjeta.component.less'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        backgroundColor: '#0000FF',
        width: '0px',
        height: '200px',
        transform: 'rotate(40deg)',
        'border-style': 'solid',
        'border-color': '#FFFF00'
      })),
      state('final', style({
        backgroundColor: '#E6E6E6',
        width: '600px',
        height: '200px',
        transform: ' translate(300px)',
        'border-style': 'solid',
        'border-color': '#FFFF00'
      })),
      transition('initial=>final', animate('400ms')),
      transition('final=>initial', animate('400ms'))
    ]),
  ]
})
export class PokeTarjetaComponent implements OnInit {

  currentState = 'initial';

  @Input() pokemon : any;


  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  constructor(private router: Router) { }

  ngOnInit() {
    this.pageLoad();
  }

  async pageLoad() {
    this.currentState = 'initial';
    this.waitForOneSecond().then( () =>
      this.currentState = 'final'
    );
  }

  waitForOneSecond() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('I promise to return after second!');
      }, 1000);
    });
  }


  aVerDetalle(id : string) {
    this.router.navigate(['detalle/' + id]);
  }
}
