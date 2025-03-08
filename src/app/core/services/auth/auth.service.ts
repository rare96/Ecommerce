import { Injectable , PLATFORM_ID , afterNextRender, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../../shared/interfaces/user';
import { LoginData } from '../../../shared/interfaces/login-data';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import {jwtDecode} from 'jwt-decode';
import { afterEach } from 'node:test';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  isLogin : BehaviorSubject<boolean> = new BehaviorSubject(false);

  _PLATFORM_ID = inject(PLATFORM_ID);
  _Router = inject(Router);
  userData:BehaviorSubject<any> = new BehaviorSubject('');

  constructor(private _HttpClient:HttpClient) {
   
    
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      if (localStorage.getItem('myToken') !== null) {
        this.isLoggedInUser();
        }else{
          this._Router.navigate(['/login'])
        }
      } 
   };

  signUp(userData:User):Observable<any>{
   return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',userData)
  };

  singIn(loginData:LoginData):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',loginData)   
  }


  saveUser(){
    if(localStorage.getItem("myToken")){
      this.userData.next(jwtDecode(localStorage.getItem("myToken")!))
      
    }
  }

  isLoggedInUser(): boolean{
    if(localStorage.getItem("myToken")){
      this.userData.next(jwtDecode(localStorage.getItem("myToken")!))
      return true
      
    } else{
      return false
    }
  }


  getToken(){
    if(localStorage.getItem("myToken")){
      return localStorage.getItem("myToken")
  } 
  return ''
}

  // verifyToken(t:any):Observable<any>{
  //   return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/auth/verifyToken',{
  //     headers:{
  //       token: t,
  //     },
  //   });
  // }

  // doVerifyToken(){
  //   this.verifyToken(localStorage.getItem('myToken')).subscribe({
  //     next:(res)=>{
  //       this.isLogin.next(true);
  //     },
  //     error:()=>{
  //       this.isLogin.next(false);
  //       this._Router.navigate(['/login'])
  //     }
  //   });
  // }

}
