import { Component, OnInit } from '@angular/core';
import {UsuarioModel} from '../../usuario.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ApiLoginService} from '../../api-login.service';
import {Router, RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-pagina-login',
  templateUrl: './pagina-login.component.html',
  styleUrls: ['./pagina-login.component.less']
})
export class PaginaLoginComponent implements OnInit {

  usuario: UsuarioModel;
  private isUserLoggedIn;
  public usserLogged: UsuarioModel;
  dobleClave: string;
  claveAdmin: object;
  isAdmin: boolean;

  estiloForm = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    password: new FormControl('' , [Validators.required])
  });

  estiloForm2 = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    password: new FormControl('' , [Validators.required]),
    claveSeguridad: new FormControl('' , [Validators.required])
  });

  constructor( protected apiLogin: ApiLoginService , private router: Router) {
    this.isUserLoggedIn = false;
  }

  ngOnInit() {
      this.apiLogin.obtenerClave().subscribe(
      (data) => {
        this.claveAdmin = data;
        console.log('Clave seguridad:' + this.claveAdmin);
      },
      (error) => {
        console.error(error);
      });
      this.isAdmin = false;
      this.dobleClave = 'nada';
      this.usuario = new UsuarioModel('nadie', 'nada');
  }


  setUserLoggedIn(user: UsuarioModel) {
    this.isUserLoggedIn = true;
    this.usserLogged = user;
    localStorage.setItem('currentUser', user.usuario);
    localStorage.setItem('isLogedIn', 'true');
  }

  setOffUser() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isLogedIn');
  }


  getUserLoggedIn() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  async onSubmit() {
    // console.log(this.estiloForm.value);
    this.usuario.usuario = this.estiloForm.get('usuario').value;
    this.usuario.password = this.estiloForm.get('password').value;
    // console.log(this.usuario);

    this.apiLogin.confirmarUsuario(this.usuario).subscribe(
      (data) => {
        console.log(data);
        if (data === true) {
          this.setUserLoggedIn(this.usuario);
          this.apiLogin.obtenerTipoUsuario(this.usuario).subscribe(
            (data2) => {
              console.log('tipo de usuario: ' + data2 );
              if (typeof data2 === 'string') {
                if (data2 === 'admin') {
                  this.setOffUser();
                  this.isAdmin = true;
                } else {
                  localStorage.setItem('tipoUser', data2);
                  // alert("Tipo de Usuario Logeado:" + localStorage.getItem('tipoUser'));
                  alert('El usuario es correcto y se a logeado como:' + localStorage.getItem('currentUser'));
                  this.router.navigate(['listado']);
                }
              }
              // alert("Tipo de Usuario Logeado:" + localStorage.getItem('tipoUser'));
            }
          );

        } else {
          alert('El usuario o la contraseña son incorrectos');
        }
      },
      (error) => {
        console.error(error);
      }
    );



  }

  aListado() {
    this.router.navigate(['listado']);
  }

  aRegistrarUsuario() {
    this.router.navigate(['registro-Usuario']);
  }

  setAdminUser() {
    this.setUserLoggedIn(this.usuario);
    localStorage.setItem('tipoUser', 'admin');
  }

  async onSubmitAdmin() {
    // console.log(this.estiloForm.value);
    this.usuario.usuario = this.estiloForm2.get('usuario').value;
    this.usuario.password = this.estiloForm2.get('password').value;
    this.dobleClave = this.estiloForm2.get('claveSeguridad').value;
    // console.log(this.usuario);

    this.apiLogin.confirmarUsuario(this.usuario).subscribe(
      (data) => {
        console.log(data);
        if (data === true) {
          this.apiLogin.obtenerTipoUsuario(this.usuario).subscribe(
            (data2) => {
              console.log('tipo de usuario: ' + data2 );
              if (typeof data2 === 'string') {
                if (data2 === 'admin') {
                  if (this.dobleClave === this.claveAdmin.toString()) {
                    this.setAdminUser();
                    alert('El usuario admin es correcto y se a logeado como:' + localStorage.getItem('currentUser'));
                    this.router.navigate(['listado']);
                  } else {
                    alert('La clave de confirmacion no es correcta');
                  }
                } else {
                  alert ('El tipo de usuario no es admin');
                }
              }
              // alert("Tipo de Usuario Logeado:" + localStorage.getItem('tipoUser'));
            }
          );
        } else {
          alert('El usuario o la contraseña son incorrectos');
        }
      },
      (error) => {
        console.error(error);
      }
    );



  }

}
