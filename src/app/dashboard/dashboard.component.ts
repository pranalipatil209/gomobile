import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {SharedataService} from "../services/sharedata.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AuthService, SharedataService]
})
export class DashboardComponent {

  constructor(private router: Router, private auth:AuthService, public share:SharedataService) {}

  public data = JSON.parse(localStorage.getItem('prod'));

  filterBy():any{
      return this.share.getData();
  }
}
