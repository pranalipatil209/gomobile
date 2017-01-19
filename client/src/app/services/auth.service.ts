import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Router, Route } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private http:Http) { }

  private url = "https://choco-lava.herokuapp.com/api/";

  getData(user,d): Observable<any>{
      let response =  this.http.post(this.url+user,d)
          .map((res:any)=>{
              let data=res.json();
              if(data.success)
                  localStorage.setItem('token',data._token);
              return data;
          });
      console.log(response);
      return response;
  }

}
