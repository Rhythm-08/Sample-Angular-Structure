import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PARENT_PATHS, PATHS } from 'src/app/common/constants';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: PARENT_PATHS.DEFAULT, redirectTo: PATHS.AUTH.LOGIN, pathMatch:'full' },
  { path: PATHS.AUTH.LOGIN, component: LoginComponent },
  { path: PATHS.AUTH.REGISTER, component: RegisterComponent },
  { path: PATHS.AUTH.FORGOT_PASSWORD, component: ForgotPasswordComponent },
]


@NgModule({
  declarations: [
    ResetPasswordComponent,
    ForgotPasswordComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[LoginComponent,RegisterComponent,ForgotPasswordComponent,ResetPasswordComponent]
})
export class AuthModule { }
