import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinishServiceService {
  
  private prefix = "http://localhost:8080/";
  constructor(private http:HttpClient) { }

  getStatus(id:string):Observable<string>
  {
    const params = new HttpParams().set('gid',id);
    let requestString = this.prefix + "game/get-status";
    
 
  return  <Observable<string>> this.http.get(requestString,{params});
  }
}
