import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
CreateRestaurant:string='Enter Restaurant';
restaurantList=Array();
promenu='';
successful_booking_msg='You have booked successfully';
  constructor() { }

  ngOnInit(): void {
  }
onclick(promenu:{value:any}){
  if(promenu.value.length>0){
    this.restaurantList.push(promenu.value);
    promenu.value='';
  }
}
onDelete(del:number){
  this.restaurantList.splice(del,1);
}

bookres(){
  this.successful_booking_msg;
}

handleClick(event:any){
  if(event.view.getSelection().type!=='Range'){
    alert("you have booked successfully");
  }
}
}
