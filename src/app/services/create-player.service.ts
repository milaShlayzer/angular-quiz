import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatePlayerService {

  private prefix = "http://localhost:8080/";

  constructor(private http:HttpClient) { }

  createPerson(firstName:string,lastName:string):Observable<string>
  {
    let requestString = this.prefix + "person/add-person";
   
    let personObj = {
      firstName:firstName,
      lastName:lastName
    }

    return <Observable<string>> this.http.put(requestString,personObj)
  
  }
}
