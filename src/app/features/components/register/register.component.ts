import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  _AuthService = inject(AuthService);
  isErrorMes : boolean = false;
  isloading : boolean = false;  
  _router = inject(Router)

  registerForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z].{6,15}$/)]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z].{6,15}$/)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[01245][0-9]{8}$/)]),
  },this.confirmPassword);




  confirmPassword(form : any){
    if (form.get('password')?.value === form.get('rePassword')?.value){
      return null;
    } else {
      return {didntMatch : true};
    }

  }

  getData(form : any){
    if(form.valid){
      this.isloading = true;
      this._AuthService.signUp(form.value).subscribe({
        next:(res)=>{
          this.isErrorMes = false;
          this.isloading = false;
          this._router.navigate(['/login'])
        },
        error:(err)=>{
          this.isErrorMes = true;
          this.isloading = false;
        }
      })
    }else{
      this.registerForm.markAllAsTouched()
    }
    
  }

}
