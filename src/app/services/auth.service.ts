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
              if(data.result.success)
                  localStorage.setItem('token',data.result._token);
              return data;
          });
      return response;
  }

  isAuthenticated(){
      if(localStorage.getItem('token'))
          return true;
      else
          return false;
  }

  loginRequired(): Promise<any>{
    if(this.isAuthenticated()) {
      return Promise.resolve();
    }
    else {
      this.router.navigate(['/login']);
    }
  }

  skipIfLoggedIn(): void{
      if(this.isAuthenticated())
          this.router.navigate(['/home']);
      else
        this.router.navigate(['/login']);
  }

  logout(): void{
      localStorage.clear();
      this.router.navigate(['']);
      window.history.forward();
  }


}
