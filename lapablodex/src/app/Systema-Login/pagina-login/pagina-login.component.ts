import { Component, OnInit } from '@angular/core';
import {UsuarioModel} from '../../usuario.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ApiLoginService} from '../../api-login.service';
import {Router} from '@angular/router';
import {PersistencesService} from '../../persistences.service';

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

  constructor( protected apiLogin: ApiLoginService , private router: Router , protected apiPersistense: PersistencesService) {
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
    this.apiPersistense.setLoggedInTrue();
    this.apiPersistense.setCurrentUser(user.usuario);
  }

  setOffUser() {
    this.apiPersistense.setLoggedInFalse();
  }


  getUserLoggedIn() {
    return JSON.parse(this.apiPersistense.getUserName());
  }

  async onSubmit() {
    this.usuario.usuario = this.estiloForm.get('usuario').value;
    this.usuario.password = this.estiloForm.get('password').value;
    this.apiLogin.confirmarUsuario(this.usuario).subscribe(
      (data) => {
        if (data === true) {
          this.setUserLoggedIn(this.usuario);
          this.apiLogin.obtenerTipoUsuario(this.usuario).subscribe(
            (data2) => {
              if (typeof data2 === 'string') {
                if (data2 === 'admin') {
                  this.setOffUser();
                  this.isAdmin = true;
                } else {
                  this.apiPersistense.setTipoUser(data2);
                  alert('El usuario es correcto y se a logeado como:' + this.apiPersistense.getUserName());
                  this.router.navigate(['listado']);
                }
              }
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
    this.apiPersistense.setTipoUserAsAdmin();
  }

  async onSubmitAdmin() {
    this.usuario.usuario = this.estiloForm2.get('usuario').value;
    this.usuario.password = this.estiloForm2.get('password').value;
    this.dobleClave = this.estiloForm2.get('claveSeguridad').value;

    this.apiLogin.confirmarUsuario(this.usuario).subscribe(
      (data) => {
        if (data === true) {
          this.apiLogin.obtenerTipoUsuario(this.usuario).subscribe(
            (data2) => {
              if (typeof data2 === 'string') {
                if (data2 === 'admin') {
                  if (this.dobleClave === this.claveAdmin.toString()) {
                    this.setAdminUser();
                    alert('El usuario admin es correcto y se a logeado como:' + this.apiPersistense.getUserName());
                    this.router.navigate(['listado']);
                  } else {
                    alert('La clave de confirmacion no es correcta');
                  }
                } else {
                  alert ('El tipo de usuario no es admin');
                }
              }
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
