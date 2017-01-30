import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AuthService]
})
export class DashboardComponent{

  constructor(private router: Router, private auth:AuthService) { }

  public data = JSON.parse(localStorage.getItem('prod'));


  logout():void{
  	  console.log('log out');
      this.auth.logout();
  }
}
