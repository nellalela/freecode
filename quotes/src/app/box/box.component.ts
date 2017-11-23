import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.styl']
})
export class BoxComponent implements OnInit {

  quote: any;

  constructor(private http:Http) { }

  headerC = new  Headers ({'X-Mashape-Key': 'OepLSD6owKmsheOtYDt9uHBqBxlNp1vGO6bjsnrNuRUsPdi383',
  'Content-Type': 'application/x-www-form-urlencoded', 
  'Accept': 'application/json'
});

headerObj = {headers: new Headers (this.headerC)
};

getColor (){
  var colors=["#E3D900", "#28CF98","#63E427","#F75C19",
  "#42CFE5", "#C880EA", "#FC30F0", "#FC30A9","#FC306B","#FC303F",
  "#FF6537","#FE961F","#A4F225","#40B03B","#3BB099","#B03B66"];
  var index = Math.floor(Math.random()*colors.length);
  return colors[index]
}

getQuote(){
  document.getElementById("background").style.backgroundColor = this.getColor();    
  this.http.get("https://andruxnet-random-famous-quotes.p.mashape.com/",this.headerObj).subscribe((res: Response) => this.quote = res.json());
}



  ngOnInit() {
    this.getColor();
    this.getQuote();
  }

}
