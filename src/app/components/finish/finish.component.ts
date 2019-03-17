import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FinishServiceService } from 'src/app/services/finish-service.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {
  @Input('gid') gid: string;
  game: any;
  scoreText={"0":"Better Luck Next Time",
            "100":"Better Luck Next Time",
            "200":"Better Luck Next Time",
            "300":"Good Job",
            "400":"Well Done",
            "500":"Amazing you answer all the questions"}
  constructor(private finishService: FinishServiceService) { }

  ngOnInit() {
    this.showStatus();
  }

  showStatus() {
    let respoceObservble: Observable<any> = this.finishService.getStatus(this.gid);
    respoceObservble.subscribe(resp => {
      this.game=resp;
         });
  }
}
