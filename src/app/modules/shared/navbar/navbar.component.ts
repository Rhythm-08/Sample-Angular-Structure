import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private route:Router) {}
    OnClick(navigation:string){
    this.route.navigate([navigation])
  }

  OnLogout(){
    localStorage.clear();
  }
  LogOut(){

    if(localStorage.getItem('token')!==null){
      return 'block'
    }
    else{
      return 'none';
    }
  }
}
