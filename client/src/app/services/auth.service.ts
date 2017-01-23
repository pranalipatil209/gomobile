import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private http:Http, private router:Router) { }

  private url = "https://choco-lava.herokuapp.com/api/";
  // private url = "http://localhost:3000/api/";


  login(user,d): Observable<any>{
      let response =  this.http.post(this.url+user,d)
          .map((res:any)=>{
              let data=res.json();
              console.log(data);
              if(data.result.success)
                  localStorage.setItem('token',data.result._token);
              return data;
          });
      console.log(response);
      return response;
  }

  isAuthenticated(){
      if(localStorage.getItem('token')){
          return true;
      }
  }

  loginRequired(): Promise<any>{
    if(this.isAuthenticated()) {
      console.log('Authenticated');
      return Promise.resolve();
    }
    else {
      this.router.navigate(['/login']);
      return Promise.resolve();
    }
  }

  skipIfLoggedIn(): void{
      if(this.isAuthenticated())
          this.router.navigate(['/home']);
      else
        this.router.navigate(['/login']);
  }

  logout(): void{
      window.onpopstate = function (e) { window.history.forward(0); };
      localStorage.removeItem('token');
      this.router.navigate(['']);

  }


}
