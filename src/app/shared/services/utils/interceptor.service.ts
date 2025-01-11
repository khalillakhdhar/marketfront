import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private authService:AuthService) { }
  intercept(request:HttpRequest<any>,next:HttpHandler)
  {
    const token=this.authService.getToken();
    if(token)
    {
      request=request.clone({setHeaders:
        {
          Authorization:`Bearer ${token}`
        }
      })
    }
    return next.handle(request);
  }
}
