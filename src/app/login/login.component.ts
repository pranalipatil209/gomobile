import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [AuthService]
})
export class LoginComponent implements OnInit{

  loginForm : FormGroup;
  public load = false;
	constructor(fb: FormBuilder, private router:Router, public http: Http, private auth:AuthService) {
    this.loginForm = fb.group({
			'email' : [null, Validators.required],
			'password' : [null, Validators.compose([Validators.required,Validators.minLength(8)])]
		})
	}

  ngOnInit(){
    this.auth.skipIfLoggedIn();
  }

  @ViewChild('errorLogin') errorLogin: ElementRef;

	submitForm(value:any):void {
	    this.load = true;
      console.log('Login Form ',value);
      this.auth.login('login',value)
          .subscribe(res=>{
              this.load = false;
              if(res.result.success){
                  let prod = JSON.stringify(res.data);
                  localStorage.setItem('prod',prod);
                  this.router.navigate(['/home']);
              }
              else{
                this.errorLogin.nativeElement.innerHTML = res.result.message;
                alert(res.result.message);
              }
          });
	}
}
