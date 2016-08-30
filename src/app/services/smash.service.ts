import { Injectable, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Blogitem }           from '../entities/blogitem';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SmashService {

  private heroesUrl = '/blogitems';  // URL to web API

   constructor (private http: Http) {}

   public getBlogItems (): Observable<Blogitem[]> {
     return this.http.get(this.heroesUrl)
                     .map(this.extractData)
                     .catch(this.handleError);
   }
   private extractData(res: Response) {
     let body = res.json();
     return body.data || { };
   }
   private handleError (error: any) {
     // In a real world app, we might use a remote logging infrastructure
     // We'd also dig deeper into the error to get a better message
     let errMsg = (error.message) ? error.message :
       error.status ? `${error.status} - ${error.statusText}` : 'Server error';
     console.error(errMsg); // log to console instead
     return Observable.throw(errMsg);
   }


}
