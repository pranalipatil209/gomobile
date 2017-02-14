import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-canvas-area',
  templateUrl: './canvas-area.component.html',
  styleUrls: ['./canvas-area.component.css']
})
export class CanvasAreaComponent{

	constructor(private router:Router){}

 	signup():void{
 		console.log('Signup click');
 		this.router.navigate(['/signup']);
 	}
 	login():void{
 		console.log('Login click');
 		this.router.navigate(['/login']);
 	}

 }
