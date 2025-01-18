import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl="http://localhost:8080/auth"
  private currentUser:Observable<any>;
private currentUserSubject:BehaviorSubject<any>;
  constructor(private http:HttpClient, private router:Router) {
const storedUser=localStorage.getItem("currentUser");
this.currentUserSubject=new BehaviorSubject<any>(storedUser ? JSON.parse(storedUser) :null );
this.currentUser=this.currentUserSubject.asObservable();



  }
  getToken()  {
    return localStorage.getItem("currentUser");

  }
  login(email:string,password:string)
  {
    return this.http.post<any>( `${this.apiUrl}/login`, {userName: email,password}, {responseType: 'json'}).pipe(
      map((response:string)=>
     { if(response)
      {
       const user={email:email,token:response};
        localStorage.setItem("currentUser",JSON.stringify(user));
        this.currentUserSubject.next(user);
      }
      return response;
     }


      )
    )
  }



}
