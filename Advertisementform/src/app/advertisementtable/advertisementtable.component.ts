import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-advertisementtable',
  templateUrl: './advertisementtable.component.html',
  styleUrls: ['./advertisementtable.component.css']
})
export class AdvertisementtableComponent implements OnInit {

 // @Input() tabdata:any;
  tabrxd;
  constructor(private _enrollmentService:EnrollmentService) { }

  ngOnInit() {
    this._enrollmentService.rendertable.subscribe((arrmsg)=>{
      console.log(arrmsg);
      this.tabrxd=arrmsg;
    });
  
  
  }

//deleteadv(element){
  //this.tabrxd.forEach((value,index)=>{
   // if(value==element)
    //this.tabrxd.splice(index,1);
//});
    
  //}

  deleteadv(index){
    this.tabrxd.splice(index);
  }

}
