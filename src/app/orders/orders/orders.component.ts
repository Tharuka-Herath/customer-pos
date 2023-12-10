import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit{

  // @ViewChild('customerId',{static:false}) customerId?:ElementRef;
  // @ViewChild('itemId',{static:false}) itemId?:ElementRef;

 
 selectedValue: any;
selectedItem: any;

 
  constructor(private customerService:CustomerService, private firestore: AngularFirestore) {
      
  }
 

  get SelectedName(): any{
    let selectedId=this.selectedValue;
    
    let option = this.customerList.find((o)=>o.id==selectedId)
    return option;
  }
  get SelectedItem(): any{
    let selectedId=this.selectedItem;
    console.log(selectedId)
    let option = this.itemList.find((o)=>o.id==selectedId)
    return option;
  }
  
  customerList:any[]=[];
  itemList:any[]=[];
  loadCustomers(){
    this.customerService.loadAll().subscribe((data)=>{
      this.customerList=data.map((e:any)=>{
        return {
          id:e.payload.doc.id,
          ...e.payload.doc.data()
        }
      })
    })
  }
  
  loadItems(){
    this.customerService.loadAllItems().subscribe((data)=>{
      this.itemList=data.map((e:any)=>{
        return {
          id:e.payload.doc.id,
          ...e.payload.doc.data()
        }
      })
    })

  }


  ngOnInit(): void {
   this.loadCustomers()
   this.loadItems()

   
  }


  





  



}
