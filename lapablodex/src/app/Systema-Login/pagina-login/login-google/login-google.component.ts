import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import { PersistencesService} from '../../../persistences.service';

@Component({
  selector: 'app-login-google',
  templateUrl: './login-google.component.html',
  styleUrls: ['./login-google.component.less']
})
export class LoginGoogleComponent implements OnInit {

  auth2: any;



  @ViewChild('loginRef', {static: true }) loginElement: ElementRef;

  constructor( private router: Router, protected apiPersistense: PersistencesService) { }

  ngOnInit() {

    this.googleSDK();


  }

  prepareLoginButton() {

    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {

        const profile = googleUser.getBasicProfile();
        /*
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); */
        // YOUR CODE HERE
        this.apiPersistense.setCurrentUser(profile.getName());
        alert('Se a logeado como:' + this.apiPersistense.getUserName());
        this.apiPersistense.setTipoUserAsUser();
        this.apiPersistense.setLoggedInTrue();
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });


  }
  googleSDK() {

    window[`googleSDKLoaded`] = () => {
      window[`gapi`].load('auth2', () => {
        this.auth2 = window[`gapi`].auth2.init({
          client_id: '904319398814-sru1t7deojie1ghua1qem91q3equ57v5.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLoginButton();
      });
    };
    /* tslint:disable:only-arrow-functions */
    (function(d, s, id) {
      const fjs = d.getElementsByTagName(s)[0];
      let js: any;
      if (d.getElementById(id)) {return; }
      js = d.createElement(s); js.id = id;
      js.src = 'https://apis.google.com/js/platform.js?onload=googleSDKLoaded';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
    /* tslint:enable:only-arrow-functions */
  }


  aListado() {
    this.router.navigate(['listado']);
  }

}
