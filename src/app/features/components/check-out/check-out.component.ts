import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../../core/services/orders/order.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-check-out',
  imports: [ReactiveFormsModule],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.scss'
})
export class CheckOutComponent {

  _ActivatedRoute = inject(ActivatedRoute);
  _OrderService = inject(OrderService);
   _Router = inject(Router);
  cartId !:string;


  checkoutForm = new FormGroup({
    details : new FormControl(null,[ Validators.required]),
    phone : new FormControl(null,[ Validators.required]),
    city : new FormControl(null,[ Validators.required]),
  });

  ngOnInit(): void {
    this.getCartId()
    
  }

  getCartId(){
    this.cartId = this._ActivatedRoute.snapshot.params['cartId']
  }

  cashOnDelivery(checkoutForm:any){
    if (checkoutForm.valid) {
      this._OrderService.cashOrder(this.cartId, checkoutForm.value).subscribe({
        next:(res)=>{
          console.log(res);
        this._Router.navigate(['/home']);
          
        }
      }
      )
    }
  }


  onLinePayment(checkoutForm:any){
    if (checkoutForm.valid) {
      this._OrderService.onlinePayment(this.cartId, checkoutForm.value).subscribe({
        next:(res)=>{
          location.href = res.session.url;
        },
        error:(err)=>{
          console.log(err);
          
        },
      })
    }
  }

}
