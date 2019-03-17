import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionsService } from 'src/app/services/questions.service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  constructor(private getquestionsService: QuestionsService) { }
  @Output('isQuestionClicked')
  isQuestionClicked = new EventEmitter<String>();
  
  @Input('gid')
  gid: string;
  //answer:number;
  questions:any;
  ngOnInit() {
    this.getquestionClicked();
  }

 
  getquestionClicked() {
    let responseObservable: Observable<any> = this.getquestionsService.getQuestion(this.gid);
    responseObservable.subscribe(resp => {

      this.questions={
        question:resp.question,
        answers:resp.answers,
        correctAnswer:resp.correctAnswer
      }
      // if(answer!=undefined)
      // this.answerquestionClicked(answer);
      
    },err=>{
      this.isQuestionClicked.emit("questions");
    });
  }
  answerquestionClicked(answer:number){
    let responseObservable: Observable<any> = this.getquestionsService.answerQuestion(this.gid,answer);
      responseObservable.subscribe(resp=>{
        this.getquestionClicked();
        console.log(resp);
    },err=>{
      this.isQuestionClicked.emit("questions");
    });
  }
 
}

