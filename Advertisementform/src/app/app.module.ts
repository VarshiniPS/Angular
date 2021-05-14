import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdvertisementformComponent } from './advertisementform/advertisementform.component';
import { HttpClientModule } from '@angular/common/http';
import { AdvertisementtableComponent } from './advertisementtable/advertisementtable.component';
import { EditproductComponent } from './editproduct/editproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvertisementformComponent,
    AdvertisementtableComponent,
    EditproductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
