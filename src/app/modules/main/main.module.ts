import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AddTasksComponent } from './add-tasks/add-tasks.component';
import { Routes } from '@angular/router';
import { PATHS,PATH_MATCH } from 'src/app/common/constants';
const routes: Routes = [
  {path:PATHS.MAIN.DASHBOARD,component:HomeComponent},
  {path:PATHS.MAIN.TASK,component:AddTasksComponent}

  
]

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
