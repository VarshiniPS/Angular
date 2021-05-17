import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
/*userloggedin=false;
@ViewChild(ChildComponent) childcomponentRef:ChildComponent;
ngAfterViewInit(){
  this.childcomponentRef.message='message from parent component'
}*/
greet(name:string){
  alert('hello ps');
}
}
