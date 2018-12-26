import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http'


@Component({
  selector: 'parent-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.sass']
})
export class AddressComponent implements OnInit {


  constructor(private http:HttpClient){

  }

  addresses=[];
  childAdd(event){
  this.addresses.push(event)
  // console.log(this.addresses, "this.address");
  }

  addNewAddress(){
    this.addresses.push({
      address:'',
      city:'',
      state:'',
      pin:'',
      view:'formview'
    })
  }
      
    ngOnInit() { 
      this.getAddressList();
      
    }   

    getAddressList() {
      this.http.get('./assets/address.json').subscribe(data=>{
        console.log(data, "data")
        data['address'].forEach(res => {
          res.view ="normal";
          this.addresses.push(res);
        });
      });
    }
  }    



  
  

  
 
  
  

