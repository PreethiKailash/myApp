import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup, Validators, AbstractControlDirective} from '@angular/forms';
import {HttpClient } from '@angular/common/http'
import { AddressComponent } from '../address/address.component';

@Component({
  selector: 'child-input',
  templateUrl: './child-input.component.html',
  styleUrls: ['./child-input.component.sass']
})
export class ChildInputComponent implements OnInit {

  @Input() addrez;
  @Output() addressAdd = new EventEmitter();



  

   form:FormGroup;
    constructor(private http:HttpClient){
      
    }
    
    addressChild=[];
    updateItem;
      
    onSubmit(){ 
      this.addrez=this.form.value;
      // console.log(this.addrez,"this,addz");

        this.show=true;
      
   }
       show=true;
       submit='show';
       

   

      toggle(){
        this.show=!this.show;
        if(this.show)
        this.submit='hide';
        else
        this.submit='show';
      }


  


  ngOnInit() {
    // console.log(this.addrez);
    if(this.addrez.view == "normal") {
      this.show=true;
      // console.log(this.addrez,"this.addrez");
    
    }else{
      this.show=false;
      // console.log(this.show,"show false");
    }
    // console.log(this.addrez,"add in child ts");
    this.form= new FormGroup({
      address1:new FormControl(this.addrez.address, [Validators.required, Validators.minLength(4)]),
      city: new FormControl(this.addrez.city, [Validators.required, Validators.pattern('[a-zA-z]*')]),
       state: new FormControl(this.addrez.state, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
       pin : new FormControl(this.addrez.pin, [Validators.required, Validators.pattern('[0-9]')])
      });
  }

  

  

}
