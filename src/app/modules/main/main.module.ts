import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AddTasksComponent } from './add-tasks/add-tasks.component';


@NgModule({
  declarations: [
    HomeComponent,
    AddTasksComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
