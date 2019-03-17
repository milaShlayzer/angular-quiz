import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

 
  @Output('isStartClicked')
  isStartClicked = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
    
    
  }

  startClicked(e:Event)
  {
    this.isStartClicked.emit("Hello every one");
    console.log(e);
    
  }

}
