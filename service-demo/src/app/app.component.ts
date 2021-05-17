import { Component } from '@angular/core';
import { InteractionService } from './interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-demo';

  constructor(private _interactionservice:InteractionService){}
  
  greetstudent(){
    this._interactionservice.sendmessage('good morning');
  }

  appreciatestudent(){
    this._interactionservice.sendmessage('well done');
  }
}

