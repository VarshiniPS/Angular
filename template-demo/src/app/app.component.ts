import { Component,ElementRef,ViewChild,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  pageTitle="Angular Component Interaction";
  imgUrl='https://picsum.photos/200';
  count=0;
  name:string|undefined;
  username: string | undefined;
  private _customername!:string;
  @ViewChild('nameRef') nameElementRef!:ElementRef;

  ngAfterViewInit(){
    this.nameElementRef.nativeElement.focus();
    
    
  }
  incrementcount(){
    this.count+=1;
  }

greetps(updatedvalue: string){
    this.username=updatedvalue;
    if(updatedvalue=='ps'){
      alert('welcome back ps');
    }
  }

  get customername():string{
    return this._customername;
  }

  set customername(value:string){
    this._customername=value;
    if(value=='varshu'){
      alert('hello varshu');
    }
  }
}


