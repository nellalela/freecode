import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.styl']
})
export class ResultComponent implements OnInit {

  @Input()
  title: string;

@Input()
  description: string;

@Input()
  url: string;

  constructor() { }

  ngOnInit() {
  }

}
