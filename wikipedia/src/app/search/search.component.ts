import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams, Jsonp } from '@angular/http';
import { WikiService } from '../wiki.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.styl']
})
export class SearchComponent implements OnInit {
  items: any;
  pag = [];
  key = [];

  constructor(private WikiService: WikiService) { }

  search(term) {
    
        this.WikiService.search(term)
                              .then(items => this.items = items);
        
        if (this.items){
          this.key = Object.keys(this.items.query.pages);
          if (this.pag.length > 0){
            for (var i = this.pag.length; i > 0; i--){
              this.pag.pop();
            }
          }
          for (var i = 0; i <this. key.length; i++) {
            this.pag.push(this.items.query.pages[this.key[i]]);
          }
          console.log(this.items); 
        }
      }

  ngOnInit() {
  }

}
