import { Component, OnInit ,EventEmitter, Output} from "@angular/core";
import { CreatePlayerService } from 'src/app/services/create-player.service';
import { StartGameService } from 'src/app/services/start-game.service';
import { Observable } from 'rxjs';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  
  constructor(private createPlayerService:CreatePlayerService,private startGameService:StartGameService) {}
  
  @Output("isRegisterClicked")
  isRegisterClicked=new EventEmitter<string>();
  name:string;
  lastName:string;
  ngOnInit() {

  }

  registerClicked(){
    let responseObservable:Observable<any> =  this.createPlayerService.createPerson(this.name,this.lastName);
    responseObservable.subscribe(resp=>{
       this.startGame(resp);
    });
  }

  private startGame(resp: any) {
    let responseObservable: Observable<any> = this.startGameService.startGame(resp.id);
    responseObservable.subscribe(res => {
      this.isRegisterClicked.emit(res.sResponse);
    });
  }
  }

