import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTaskDetailsComponent } from './view-task-details/view-task-details.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    ViewTaskDetailsComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [NavbarComponent]
})
export class SharedModule { }
