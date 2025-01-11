import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl="http://localhost:8080/auth"

  constructor(private http:HttpClient) {

   }
   getUsers()
   {
    return this.http.get<any>(`${this.apiUrl}/getUsers`);
   }
   getOneUser(id:number)
   {
    return this.http.get<any>(`${this.apiUrl}/getUsers/${id}`);
   }
   createUser(user:any)
   {
    return this.http.post(`${this.apiUrl}/add`,user);
   }
   /*
  deleteOneUser(id: number) {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
   */
}
