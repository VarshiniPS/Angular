import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
private _teachermessagesource=new Subject<string>();
teachermessage$=this._teachermessagesource.asObservable();

  constructor() { }
sendmessage(message:string){
  this._teachermessagesource.next(message);
}

}
