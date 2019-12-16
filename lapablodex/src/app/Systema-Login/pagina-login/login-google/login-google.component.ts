import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login-google',
  templateUrl: './login-google.component.html',
  styleUrls: ['./login-google.component.less']
})
export class LoginGoogleComponent implements OnInit {

  auth2: any;

  @ViewChild('loginRef', {static: true }) loginElement: ElementRef;

  constructor() { }

  ngOnInit() {

    this.googleSDK();
  }

  prepareLoginButton() {

    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {

        let profile = googleUser.getBasicProfile();
        /*
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); */
        // YOUR CODE HERE
        localStorage.setItem('currentUser', profile.getName());
        //alert("El usuario es de google y se a logeado como:" + localStorage.getItem('currentUser'));
        localStorage.setItem('tipoUser', 'usuario');
        //alert("Tipo de Usuario Google Logeado:" + localStorage.getItem('tipoUser'));


      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });

  }
  googleSDK() {

    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '904319398814-sru1t7deojie1ghua1qem91q3equ57v5.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLoginButton();
      });
    }

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));

  }


}
