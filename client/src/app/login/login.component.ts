import { Component} from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { Http, Response, Request, RequestMethod } from '@angular/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
	
	hide : '1';
	show : '0';
	loginForm : FormGroup;

	constructor(fb: FormBuilder, private router:Router, public http: Http) {

		this.loginForm = fb.group({
			'email' : [null, Validators.required],
			'password' : [null, Validators.compose([Validators.required,Validators.minLength(8)])]
		})
	}

	submitForm(value:any):void{
		console.log('Login Form ',value);
		
		this.http.post('https://choco-lava.herokuapp.com/api/login', value).subscribe(
		(res:any)=>{
			let data = res.json();
			console.log('Login Successful ',data._token);
			this.router.navigate(['/home']);
			console.log(localStorage.setItem('token',data._token));
		})
		
	}
}
