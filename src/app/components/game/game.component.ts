import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }
  gameState:string;
  gid:string;
 
  ngOnInit() {
    this.gameState ="Start";
  }

  setGameState(state:string)
  {
    this.gameState=state;
  }

  startGame(eventGid:string)
  {
    this.gid = eventGid;
    this.setGameState('Questions');
  }

 
  

}
