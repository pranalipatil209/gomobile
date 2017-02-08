import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [AuthService]
})
export class HomeComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  logout():void{
    console.log('log out');
    this.auth.logout();
  }

}
