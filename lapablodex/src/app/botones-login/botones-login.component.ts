import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-botones-login',
  templateUrl: './botones-login.component.html',
  styleUrls: ['./botones-login.component.less']
})
export class BotonesLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  aLogin() {
    this.router.navigate(['pagina-login']);
  }

  aRegistrarUsuario() {
    this.router.navigate(['registro-Usuario']);
  }


  logOut() {
    window.location.reload();
  }

}
