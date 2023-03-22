import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControlOptions } from '@angular/forms';
import { Router } from '@angular/router';
import { PATHS, REGEX } from 'src/app/common/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
SignUpForm!: FormGroup;
submitted:boolean =false;
constructor(private fb: FormBuilder,private route:Router){
  this.initSignUpForm();
}
ngOnInit(): void {
}
initSignUpForm(){
  this.SignUpForm = this.fb.group({
    name: new FormControl('',[Validators.required,Validators.pattern(REGEX.NAME)]),
    email: new FormControl('',[Validators.required,Validators.pattern(REGEX.EMAIL)]),
    phoneNumber: new FormControl('',[Validators.required,Validators.pattern(REGEX.PHONE_NUMBER)]),
    password: new FormControl('',[Validators.required,Validators.pattern(REGEX.PASSWORD)]),
    confirmPassword: new FormControl('',[Validators.required])
},
{
  validators: [this.MustMatch('password','confirmPassword')] as AbstractControlOptions
}
)}
MustMatch(controlName:string, matchingControlName:string){
  return (formGroup:FormGroup)=>{
    const control = formGroup.controls[controlName];
    const matchcontrol = formGroup.controls[matchingControlName];
    if(matchcontrol.errors && !matchcontrol.errors?.['MustMatch']){
    return
  }
  if(control.value != matchcontrol.value){
    matchcontrol.setErrors({MustMatch:true});
  }
  else{
    matchcontrol.setErrors(null);
  }
}}
get controls(){
  return this.SignUpForm.controls;
}
signUp(){
  if((this.SignUpForm as FormGroup).valid){
    this.clearForm();
  }
}
clearForm(){
  this.SignUpForm.reset({
    'name':'',
    'phoneNumber':'',
    'confirmPassword':'',
    'email':'',
    'password':''
  })
}

OnClick(){
  this.route.navigate([PATHS.AUTH.LOGIN]);
}
}
