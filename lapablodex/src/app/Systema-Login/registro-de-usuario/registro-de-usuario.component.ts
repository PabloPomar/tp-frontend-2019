import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ApiLoginService} from '../../api-login.service';
import {UsuarioModel} from '../../usuario.model';
import {Router, RouterModule, Routes} from '@angular/router';

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
  // tieneSimbol = 0;
  tieneMismaPassword = 0;


  estiloForm = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    password: new FormControl('' , [Validators.required  ,
      Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$')]),
    rePassword: new FormControl('', [Validators.required])
  }, [Validators.required , this.checkPasswords]);

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const pass = group.get('password').value;
    const confirmPass = group.get('rePassword').value;
    return pass === confirmPass ? null : { notSame: true } ;
  }

  check(group: FormGroup) {
    let checker = 0;
    const pass = group.get('password').value;
    const confirmPass = group.get('rePassword').value;
    // console.log('Password: ' + pass);
    this.hasReqLenght(pass);
    this.hasLowerCase(pass);
    this.hasUpperCase(pass);
    this.hasNumber(pass);
    // this.hasSymbol(pass);
    this.hasSamePasswords(pass, confirmPass);
    checker = this.longitud + this.mayus + this.minus + this.tieneNum + this.tieneMismaPassword;
    return checker === 5 ? null : { notSame: true } ;

  }

  hasReqLenght(str) {
    /*
    console.log("Longitud:");
    console.log(str.length > 7);
    if (str.length > 7 === true) {
      this.longitud = 1;
      console.log(this.longitud);
      console.log('Funciona V');
    } else {
      this.longitud = 0;
      console.log(this.longitud);
      console.log('Funciona F');
    }
     */
    if (str.length > 7 === true) {
      this.longitud = 1;
    } else {
      this.longitud = 0;
    }


  }


  hasLowerCase(str) {
    // console.log('Minuscula');
    // console.log(str.toUpperCase() !== str);}
    if ((str.toUpperCase() !== str) === true) {
      this.minus = 1;
    } else {
      this.minus = 0;
    }
  }

  hasUpperCase(str) {
    // console.log('Mayuscula');
    // console.log(str.toLowerCase() !== str);
    if ((str.toLowerCase() !== str) === true) {
      this.mayus = 1;
    } else {
      this.mayus = 0;
    }
  }

  hasNumber(myString) {
    // console.log('Numero');
    // console.log(/\d/.test(myString));
    // return /\d/.test(myString);
    if ((/\d/.test(myString)) === true) {
      this.tieneNum = 1; } else {
      this.tieneNum = 0;
    }
  }

  /*
  hasSymbol(myString) {
    // console.log('Symbolo');
    // console.log(/[!@#$%^&*(),.?":{}|<>]/.test(myString));
    if ((/[!@#$%^&*(),.?":{}|<>]/.test(myString)) === true) {
      this.tieneSimbol = 1;
    } else {
      this.tieneSimbol = 0;
    }
  }
   */

  hasSamePasswords(pass , confirmPass) { // here we have the 'passwords' group
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
        console.log(data);
        if (data === true) {
          console.log('Es true');
          this.exist = true;
          console.log ('Resultado:' + this.exist);
          return true;
        } else {
          console.log('Es false');
          this.exist = false;
          console.log ('Resultado:' + this.exist);
          return false;
        }
      },
      (error) => {
        console.error(error);
      }
    );

  }

  async onSubmit() {
    // console.log(this.estiloForm.value);
    this.usuario.usuario = this.estiloForm.get('usuario').value;
    this.usuario.password = this.estiloForm.get('password').value;
    // console.log(this.usuario);

    this.apiLogin.userExist(this.usuario.usuario).subscribe(
      (data) => {
        console.log(data);
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
