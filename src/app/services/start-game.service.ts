import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StartGameService {
  private prefix = "http://localhost:8080/";
  
  constructor(private http:HttpClient) { }

  startGame(id:string):Observable<string>
  {
    const params = new HttpParams().set('pid',id);
    let requestString = this.prefix + "game/start";
    
 
  return  <Observable<string>> this.http.get(requestString,{params});
  }
}
