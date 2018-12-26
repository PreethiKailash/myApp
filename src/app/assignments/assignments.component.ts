import { Component, OnInit, OnDestroy} from '@angular/core';
import {HttpClient } from '@angular/common/http'


@Component({
  selector: 'all-quotes',
  templateUrl: './assignments.component.html',
 
})
export class AssignmentsComponent implements OnInit, OnDestroy {

   obj;
  //  reponse= this.obj;
  addingFav(event){ 
    if(event.lines=="allTheLines"){
    this.addItem1(this.obj.quotes.allQuotes[event.index]);
      this.removeItem(event.index);
  } else if(event.lines=="favLines"){
    this.addItem2(this.obj.quotes.favouriteQuote[event.index]);
       this.removeItem2(event.index);
  }
  
}

  removeFav(event){ 
    this.removeItem(this.obj.quotes.allQuotes[event.index]);
}
  addItem1 (x){ 
    this.obj.quotes.favouriteQuote.push(x);
  }
  removeItem (x){ 
    this.obj.quotes.allQuotes.splice(x,1);
  }

  // Case II- from fav to not fav.
  addFav(event){
    this.removeItem2(this.obj.quotes.favouriteQuote[event.index]);
  }

  addItem2(x){
    this.obj.quotes.allQuotes.push(x);
  }

  removeItem2(x){
    this.obj.quotes.favouriteQuote.splice(x,1);
  }

// with the same function name for both



constructor(private http:HttpClient) {
  console.log("2222222222222222222221")
 
    
  }

   

  // constructor() {
  //   this.obj={
  //     "quotes":{
  //     "allQuotes":[
  //     {
  //     "quotes":"sample Quote1",
  //     "quoteBy":"Person1"
  //     },
  //     {
  //     "quotes":"sample Quote2",
  //     "quoteBy":"Person2"
  //     },
  //     {
  //     "quotes":"sample Quote3",
  //     "quoteBy":"Person2"
  //     },
  //     {
  //       "quotes":"sample Quote4.1",
  //       "quoteBy":"Person3"
  //     }
  //     ],
  //     "favouriteQuote":[
  //     {
  //     "quotes":"sample quotes4",
  //     "quoteBy":"Person2"
  //     },
  //     {
  //     "quotes":"sample quotes5",
  //     "quoteBy":"Person3"
  //     },
  //     {
  //       "quotes":"sample quotes6",
  //       "quoteBy":"Person4"
  //     },
  //     {
  //       "quotes":"sample quotes7",
  //       "quoteBy":"Person5"
  //     }
  //     ]
  //     }

      
  //     }
      
  //   }

  ngOnInit() {
    console.log("hi9i9ii");
  console.log("111111111111111")
    let obs= this.http.get('http://demo9970933.mockable.io/allQuotes',);
    obs.subscribe((response)=>{
      console.log(response,"response");
      this.obj=response;
    });
  }
  ngOnDestroy() {
    
  }
 x = []



}
