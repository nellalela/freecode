import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams, Jsonp } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class WikiService {

  constructor(private http: Http) { }
  search = (query: string) => {
    let headers = new Headers();
    headers.append('Api-User-Agent', 'Example 1');
    let options = new RequestOptions({ headers: headers});
    let apiUrl: string = 'https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=info%7Cextracts&generator=search&inprop=url&exsentences=2&exlimit=20&exintro=1&explaintext=1&exsectionformat=plain&excontinue=0&gsrsearch=' + query +'&gsrlimit=5'

    return this.http
            .get(apiUrl, options)
            .toPromise()
            .then(response => response.json());
  }
}
