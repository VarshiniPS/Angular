import { Component, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Output() greetevent=new EventEmitter();
message:string;
name='ps';
//get loggedin():boolean{
  //return this._loggedin;
//}

//@Input()
//set loggedin(value:boolean){
  //this._loggedin=value;
  //if(value===true){
    //this.message='welcome back ps';
  //}else{
    //this.message='please login';
  //}
//}
  constructor() { }

  /*ngOnChanges(changes:SimpleChanges){
    console.log(changes);
    const loggedinvalue=changes['loggedin'];
    if(loggedinvalue.currentValue===true){
      this.message='welcome back ps';
    }else{
      this.message='please log in';
    }
    
  }

  greetps(){
    alert('hey ps!');
  }*/

  callparentgreet(){
    this.greetevent.emit(this.name);
  }
}
