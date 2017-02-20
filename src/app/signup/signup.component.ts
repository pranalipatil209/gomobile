import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RouterModule, Routes, Router} from '@angular/router';
import {Http, Response, Request, RequestMethod} from '@angular/http';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent {

    signUpForm: FormGroup;
    private load = false;

    constructor(fb: FormBuilder, public http: Http, private router: Router) {

        this.signUpForm = fb.group({
            'name': [null, Validators.required],
            'email': [null, Validators.required],
            'mobile': [null, Validators.compose([Validators.required, Validators.minLength(10)])],
            'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])]
        })
    }

    submitForm(value: any): void {
        this.load = true;
        this.http.post('https://choco-lava.herokuapp.com/api/signup', value).subscribe(
            (res: any) => {
                this.load = false;
                let data = res.json();
                if (data.data == "User already exist!") {
                    alert(data.data);
                }
                else {
                    this.router.navigate(['/login']);
                }
            })
    }

}


