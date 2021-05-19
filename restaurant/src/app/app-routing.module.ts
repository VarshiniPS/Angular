import { NgModule } from '@angular/core';
import { RouterModule, Route} from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { UserComponent } from './user/user.component';

const routes: Route[] = [
  {path:'',redirectTo:'/admin',pathMatch:'full'},
  {
    path:'admin',
    component:AdminComponent,
    children:[
    {path:'menu',component:MenuComponent},
    {path:'restaurant',component:RestaurantComponent},
  ]},
 
  {path:'user',component:UserComponent},
  {path:'**',component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
