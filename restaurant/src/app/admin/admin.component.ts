import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  show=false;
  routes=[
    {linkName:'menu',url:'admin/menu'},
    {linkName:'restaurant',url:'admin/restaurant'}
  ];

  constructor() { }

  ngOnInit(): void {
  }
  displayRoute(){
    this.show=!this.show;
  }

}
