import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private prefix = "http://localhost:8080/";
  constructor(private http:HttpClient) { }
  
  getQuestion(gid:string):Observable<any>
  {
    let requestString = this.prefix + "game/get-question";
    const params = new HttpParams().set('gid',gid);
    return <Observable<any>> this.http.get(requestString,{params});
  }
  answerQuestion(gid:string,answer:number):Observable<any>
  {
    
    let requestString = this.prefix + "game/answer-question";
    const params = new HttpParams().set('gid',gid).append('answer',answer.toString());
    return <Observable<any>> this.http.get(requestString,{params});
  }
  checkAnswerQuestion(answer:number,id:number):Observable<any>
  {
    let requestString = this.prefix + "game/answer-question";
    const params = new HttpParams().set('id',id.toString());
    return <Observable<any>> this.http.get(requestString,{params});
  }
  

}
