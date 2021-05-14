import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Output,EventEmitter } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-advertisementform',
  templateUrl: './advertisementform.component.html',
  styleUrls: ['./advertisementform.component.css']
})
export class AdvertisementformComponent implements OnInit {
  categories=['Furniture','Hardware','Mobile'];
  Usermodel=new User('','VARSHINI','','');
  //@Output() tabledata=new EventEmitter<any>();
  arraydata:FormData []=[];
  data(f:NgForm){
    //console.log(f.value);
    this.arraydata.push(f.value);
    //console.log(this.arraydata);
    
  }
  constructor(private _enrollmentService:EnrollmentService){}
  //onsubmit(){
    
  //}
  //addtabledata(value:any){
    //this.tabledata.emit(value);
  //}

  ngOnInit(){}

    sendinfotocomp(){
    this._enrollmentService.htmltab(this.arraydata);
  }
}


