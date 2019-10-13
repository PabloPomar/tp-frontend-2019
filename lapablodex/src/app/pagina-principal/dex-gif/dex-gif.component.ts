import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dex-gif',
  templateUrl: './dex-gif.component.html',
  styleUrls: ['./dex-gif.component.less']
})
export class DexGifComponent implements OnInit {

  constructor(private router: Router) { }

  imgSource = '../../../assets/img/primerCuadroDex.gif' ;
  buttonClick = 0;

  ngOnInit() {
  }

  async startGif() {
     this.waitForOneSecond().then( () =>
       this.imgSource = '../../../assets/img/ultimoCuadroDex.gif'

     ) .then( () => this.waitForTwoSecond()) .then( () =>
       this.router.navigate(['listado'])
     );
  }

  waitForOneSecond() {
    this.imgSource = '../../../assets/gifs/miPokeGif.gif';
    this.buttonClick = 1;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('I promise to return after second!');
      }, 1750);
    });
  }

  waitForTwoSecond() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('I promise to return after 2 second!');
      }, 1000);
    });
  }


}
