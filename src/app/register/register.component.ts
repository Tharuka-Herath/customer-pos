import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  registerForm:FormGroup =new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
  });


  constructor(private router:Router,private authService:AuthService) {
    
  }
  ngOnInit(): void {
    console.log("register")
  }

  

register() {
  this.authService.registerWithEmailAndPassword(this.registerForm.get('email')?.value,this.registerForm.get('password')?.value).then((result) => {
    this.router.navigateByUrl("/login")
    console.log(result)
  }).catch((error) => {
    console.log(error)
  });
  

}
alreadyHaveAnAccount() {
  this.router.navigateByUrl("/login")
}


}
