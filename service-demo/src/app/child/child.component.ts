import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private _interactionservice:InteractionService) { }

  ngOnInit(){

    this._interactionservice.teachermessage$
        .subscribe(
          (message) =>{
            if(message==='good morning'){
              alert('good morning teacher');
            }else if(message==='well done'){
              alert('thank you teacher')
            }
          }
        );
  }

}
