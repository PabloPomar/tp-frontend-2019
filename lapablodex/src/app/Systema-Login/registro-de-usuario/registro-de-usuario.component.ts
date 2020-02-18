import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ApiLoginService} from '../../api-login.service';
import {UsuarioModel} from '../../usuario.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registro-de-usuario',
  templateUrl: './registro-de-usuario.component.html',
  styleUrls: ['./registro-de-usuario.component.less']
})
export class RegistroDeUsuarioComponent implements OnInit {


  usuario: UsuarioModel;
  exist: boolean;
  longitud = 0;
  mayus = 0;
  minus = 0;
  tieneNum = 0;
  tieneMismaPassword = 0;


  estiloForm = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    password: new FormControl('' , [Validators.required  ,
      Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$')]),
    rePassword: new FormControl('', [Validators.required])
  }, [Validators.required , RegistroDeUsuarioComponent.checkPasswords]);

  static checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const pass = group.get('password').value;
    const confirmPass = group.get('rePassword').value;
    return pass === confirmPass ? null : { notSame: true } ;
  }

  check(group: FormGroup) {
    let checker: number;
    const pass = group.get('password').value;
    const confirmPass = group.get('rePassword').value;
    this.hasReqLenght(pass);
    this.hasLowerCase(pass);
    this.hasUpperCase(pass);
    this.hasNumber(pass);
    this.hasSamePasswords(pass, confirmPass);
    checker = this.longitud + this.mayus + this.minus + this.tieneNum + this.tieneMismaPassword;
    return checker === 5 ? null : { notSame: true } ;

  }

  hasReqLenght(str) {
    if (str.length > 7 === true) {
      this.longitud = 1;
    } else {
      this.longitud = 0;
    }
  }


  hasLowerCase(str) {
    if ((str.toUpperCase() !== str) === true) {
      this.minus = 1;
    } else {
      this.minus = 0;
    }
  }

  hasUpperCase(str) {
    if ((str.toLowerCase() !== str) === true) {
      this.mayus = 1;
    } else {
      this.mayus = 0;
    }
  }

  hasNumber(myString) {
    if ((/\d/.test(myString)) === true) {
      this.tieneNum = 1; } else {
      this.tieneNum = 0;
    }
  }


  hasSamePasswords(pass , confirmPass) {
    if (pass.length === 0) {
      this.tieneMismaPassword = 0;
    } else {
      if (pass === confirmPass) {
        this.tieneMismaPassword = 1;
      } else {
        this.tieneMismaPassword = 0;
      }
    }

  }





  constructor( protected apiLogin: ApiLoginService , private router: Router) { }

  ngOnInit() {
    this.usuario = new UsuarioModel('nadie', 'nada');
  }

  validarUsuario(username: string) {
    this.apiLogin.userExist(username).subscribe(
      (data) => {
        if (data === true) {
          this.exist = true;
          return true;
        } else {
          this.exist = false;
          return false;
        }
      },
      (error) => {
        console.error(error);
      }
    );

  }

  async onSubmit() {
    this.usuario.usuario = this.estiloForm.get('usuario').value;
    this.usuario.password = this.estiloForm.get('password').value;

    this.apiLogin.userExist(this.usuario.usuario).subscribe(
      (data) => {
        if (data === true) {
          alert('El usuario ya existe. Elija otro.');
        } else {
          this.apiLogin.AgregarUsuario(this.usuario).subscribe();
          alert('Usuario Agregado =)');
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



}
