import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/compat';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup =new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
  });


  constructor(private router:Router,private authService:AuthService) {
    
  }
  ngOnInit(): void {
    console.log("login")
  }

  

login() {
  this.authService.signInWithEmailAndPassword(this.loginForm.get('email')?.value,this.loginForm.get('password')?.value).then((result) => {
    this.router.navigateByUrl("/dashboard")
    console.log(result)
  }).catch((error) => {
    console.log(error)
  });
  

}
createAnAccount() {
  this.router.navigateByUrl("/register")
}

}
