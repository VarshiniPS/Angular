import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'restaurant';

  routes=[{linkName:'admin',url:'admin'},
{linkName:'user',url:'user'}];

constructor(){
  
}

gotoadmin(){
  window.open(this.url+'/admin');
}

ngOnInit(){

}
url="./assets/rest.jpg";
}
