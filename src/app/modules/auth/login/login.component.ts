import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { REGEX,PATHS } from 'src/app/common/constants';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;
  submitted:boolean =false;
  constructor( private fb: FormBuilder,private route:Router){
    this.initLoginForm();
  }
  ngOnInit(): void {

  }
  initLoginForm(){
  this.LoginForm = this.fb.group({
    email: new FormControl('',[Validators.required,Validators.pattern(REGEX.EMAIL)]),
    password: new FormControl('',[Validators.required,Validators.pattern(REGEX.PASSWORD)])
})
}
get controls(){
  return this.LoginForm?.controls;
}
login(){
    if((this.LoginForm as FormGroup).valid){

      this.clearForm();
    }
    else{
      this.submitted =false;
    }
}
clearForm(){
  this.LoginForm.reset({
    'email':'',
    'password':''
  })
}
OnClick(){
  this.route.navigate([PATHS.AUTH.REGISTER]);
}
}

