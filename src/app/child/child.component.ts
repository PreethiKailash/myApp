import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass'],
  
})
export class ChildComponent implements OnInit {

  favclick(index) {
    console.log('I am fav clicked in child');
    this.fav.emit(index);
}

  unfavclick(index){
  this.notfav.emit(index);
  }

  press(index, lines){

    var object ={
      index:index,
      lines: this.lines
    }
    this.fav.emit(object);
  }





@Input() quotez;
@Input() lines;
// quotes can be of any type, and the name can be changed accordingly in the other files.

 @Output() fav = new EventEmitter();
 @Output() notfav = new EventEmitter();
 

  ngOnInit() {
   console.log(this.quotez);
   console.log(this.lines);

  }

}
