import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private firestore:AngularFirestore) { }

  createCustomer(customer:any):Promise<any>{
    return this.firestore.collection('customer').add(customer)
  }

loadAll():Observable<any>{
  return this.firestore.collection('customer').snapshotChanges();
}

findCustomer(id:any):Observable<any>{
  return this.firestore.collection('customer').doc(id).valueChanges();
}

updateCustomer(id:any,customer:any):Promise<any>{
  return this.firestore.collection('customer').doc(id).update(customer);
}
deleteCustomer(id:any):Promise<any>{
  return this.firestore.collection('customer').doc(id).delete();
}

loadAllItems():Observable<any>{
    return this.firestore.collection('item').snapshotChanges()
}
  
}
