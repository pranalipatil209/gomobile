import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { Http, Response, Request, RequestMethod } from '@angular/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [AuthService]
})
export class LoginComponent{

  loginForm : FormGroup;

	constructor(fb: FormBuilder, private router:Router, public http: Http, private auth:AuthService) {

		this.loginForm = fb.group({
			'email' : [null, Validators.required],
			'password' : [null, Validators.compose([Validators.required,Validators.minLength(8)])]
		})
	}

  @ViewChild('errorLogin') errorLogin: ElementRef;

	submitForm(value:any):void {
      console.log('Login Form ',value);
      this.auth.getData('login',value)
          .subscribe(res=>{
              console.log(res);
              if(res.success){
                  this.router.navigate(['/home'])
              }
              else{
                this.errorLogin.nativeElement.innerHTML = res.message;
                alert(res.message);
              }
          });
  }
}
