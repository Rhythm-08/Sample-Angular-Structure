import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PARENT_PATHS,PATH_MATCH,PATHS } from './common/constants';
import { HomeComponent } from './modules/main/home/home.component';
const routes: Routes = [
  {path:PARENT_PATHS.DEFAULT, redirectTo:PATHS.MAIN.DASHBOARD, pathMatch:'full'},
  {path:PARENT_PATHS.MAIN, loadChildren:()=>import('./modules/main/main.module').then(m=>m.MainModule)},
  {path:PARENT_PATHS.AUTH,loadChildren:()=>import('./modules/auth/auth.module').then(m=>m.AuthModule)},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
