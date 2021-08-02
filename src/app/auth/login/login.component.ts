import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { FirebaseAuthService } from '../firebase-auth.service';
import { firebase } from '@firebase/app'
import '@firebase/auth'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  provider = new firebase.auth.GoogleAuthProvider();
  err

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private authService: FirebaseAuthService) {
    this.authService.currError.subscribe(data=>{
      this.err = data;

      /* setTimeout(()=>{
        this.err = '';
      },10000) */
    })
  }

  ngOnInit(): void {
  }

  onLoginClick(){
    this.authService.login(this.loginForm.value.email,this.loginForm.value.password)
  }

  googleLogin(e){
    this.authService.AuthLogin(this.provider)
  }

}
