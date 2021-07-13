import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatchPassowords } from '../validators/match-passowords';
import { FirebaseAuthService } from '../firebase-auth.service';
import { firebase } from '@firebase/app'
import '@firebase/auth'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide: boolean = true;
  emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  provider = new firebase.auth.GoogleAuthProvider();

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),
    password: new FormControl('', [Validators.required]),
    confirmPass: new FormControl('', [Validators.required])
  }, { validators: [this.matchPassword.validate]})

  constructor(private matchPassword: MatchPassowords, private authService: FirebaseAuthService) { }

  ngOnInit(): void {
  }

  onRegisterClick(){
    this.authService.registerUserWithMail(this.registerForm.value.email,this.registerForm.value.password)
  }

  googleLogin(e){
    this.authService.AuthLogin(this.provider)
  }
}
