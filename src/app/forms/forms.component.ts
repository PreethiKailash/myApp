import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.sass']
})
export class FormsComponent implements OnInit {


// form:FormGroup;
//   constructor(private fb:FormBuilder) { 
//     this.form=this.fb.group({
//       username:['', Validators.minLength(4)],
//       password:'',
//     }); 
//   }

form:FormGroup;
  constructor(private http:HttpClient){
    this.form= new FormGroup({
      // username:new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
       email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])
    });
    console.log(this.form);
  }



  onSubmit(){ 
     console.log(this.form.value);
     let obj= this.http.post('http://demo9970933.mockable.io/signin',{
      email: this.form.value.email,
      password:this.form.value.password
    });
    obj.subscribe((data)=>{
      console.log(data,"data post");
    });
  }

  ngOnInit() {
  
  }      

}
