import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';



@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  _AuthService= inject(AuthService);
  _Router= inject(Router);


  enableNavBar : boolean = false;

  ngOnInit(): void {
    this._AuthService.isLogin.subscribe( (res)=>{
      this.enableNavBar = res;
    })
    
  }

  signOut(){
    localStorage.removeItem('myToken');
     this._AuthService.isLogin.next(false);
     this._Router.navigate(['/login'])

  }
}
