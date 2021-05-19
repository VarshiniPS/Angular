import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  tabrxd;

  constructor(private _enrollmentServ:EnrollmentService) { }

  ngOnInit() {
    this._enrollmentServ.rendertable.subscribe((arrmsg)=>{
      console.log(arrmsg);
      this.tabrxd=arrmsg;
    });
  
    
  
  }
}
