import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //para conectarme
import { Observable } from 'rxjs';
  import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComicServiceService {
  URL_API='https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=938f757a837832b9f5bce2a655f45c33&hash=01100778499f7adf93107b7ab0183022';
 
  constructor(private http: HttpClient) { }

  getComics():Observable<any>{
    return this.http.get<any>(this.URL_API)
    .pipe( map((data:any)=>data.data.results))
  }


}
