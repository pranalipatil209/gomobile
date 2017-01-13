import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router) { }

  logout():void{
  	console.log('log out');
  	localStorage.removeItem('token');
  	this.router.navigate(['/login']);
  }
  

}
