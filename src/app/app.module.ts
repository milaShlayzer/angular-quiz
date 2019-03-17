import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { StartComponent } from './components/start/start.component';
import { GameComponent } from './components/game/game.component';
import { FinishComponent } from './components/finish/finish.component';
import { RegisterComponent } from './components/register/register.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StartGameService } from './services/start-game.service';
import { CreatePlayerService } from './services/create-player.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StartComponent,
    GameComponent,
    FinishComponent,
    RegisterComponent,
    QuestionsComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [StartGameService,CreatePlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
