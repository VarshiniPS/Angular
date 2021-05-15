import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

const materialcomponents=[
  MatButtonModule
]

@NgModule({
 
  imports: [materialcomponents],
  exports:[materialcomponents]
})
export class MaterialModule { }
