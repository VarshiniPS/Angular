import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  rendertable=new Subject();
  constructor(){ }
  
  htmltab(arr){
    this.rendertable.next(arr);
  }

  //deleteadv(){

  //}
}
