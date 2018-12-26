import { Component, OnInit, Input } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'authors',

  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.sass']
})
export class AuthorsComponent implements OnInit {

@Input() lines;

  authors;

  constructor(service:AuthorsService) { 
    this.authors = service.getAuthors();

    


  }

  ngOnInit() {
  }

}
