import { Component, OnInit } from '@angular/core';
import {UsuarioModel} from "../../usuario.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { ApiLoginService} from "../../api-login.service";


@Component({
  selector: 'app-pagina-login',
  templateUrl: './pagina-login.component.html',
  styleUrls: ['./pagina-login.component.less']
})
export class PaginaLoginComponent implements OnInit {

  usuario: UsuarioModel;
  private isUserLoggedIn;
  public usserLogged:UsuarioModel;


  estiloForm = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    password: new FormControl('' , [Validators.required])
  });

  constructor( protected apiLogin: ApiLoginService) {
    this.isUserLoggedIn = false;
  }

  ngOnInit() {
    this.usuario = new UsuarioModel("nadie", "nada");
  }


  setUserLoggedIn(user:UsuarioModel) {
    this.isUserLoggedIn = true;
    this.usserLogged = user;
    localStorage.setItem('currentUser', user.usuario);
    localStorage.setItem('isLogedIn', 'true');
  }


  getUserLoggedIn() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  async onSubmit() {
    //console.log(this.estiloForm.value);
    this.usuario.usuario = this.estiloForm.get('usuario').value;
    this.usuario.password = this.estiloForm.get('password').value;
    //console.log(this.usuario);

    this.apiLogin.confirmarUsuario(this.usuario).subscribe(
      (data) => {
        console.log(data);
        if (data === true) {
          this.setUserLoggedIn(this.usuario);
          this.apiLogin.obtenerTipoUsuario(this.usuario).subscribe(
            (data) => {
              console.log('tipo de usuario: ' + data );
              if (typeof data === "string") {
                localStorage.setItem('tipoUser', data);
              }
              //alert("Tipo de Usuario Logeado:" + localStorage.getItem('tipoUser'));
            }
          )
          alert("El usuario es correcto y se a logeado como:" + localStorage.getItem('currentUser'));
        }
        else {
          alert("El usuario o la contraseña son incorrectos");
        }
      },
      (error) => {
        console.error(error);
      }
    );

  }



}
