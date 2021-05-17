import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics=['Angular','React','Vue'];
  topichaserror=true;
  submitted=false;
  errormsg='';
  Usermodel=new User('ps','psvarshini34@gmail.com',9845252531,'default','morning',true);

  constructor(private _enrollmentService:EnrollmentService){}

  validatetopic(value){
    if(value==='default'){
      this.topichaserror=true;
    }else{
      this.topichaserror=false;
    }
  }

  onsubmit(){
this.submitted=true;
    this._enrollmentService.enroll(this.Usermodel)
        .subscribe(
          data=>console.log('success!',data),
          error=>this.errormsg=error.StatusText
          )
    
  }
}
