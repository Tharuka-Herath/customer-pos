import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afs:AngularFireAuth) { }


  registerWithEmailAndPassword(email:string,password:string){
    return this.afs.createUserWithEmailAndPassword(email,password)
  }
  signInWithEmailAndPassword(email:string,password:string){
    return this.afs.signInWithEmailAndPassword(email,password)
  }

}
