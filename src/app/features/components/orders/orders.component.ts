import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { OrderService } from '../../../core/services/orders/order.service';
import { Orders } from '../../../shared/interfaces/orders';

@Component({
  selector: 'app-orders',
  imports: [],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {


   _AuthService = inject(AuthService);
   _OrderService = inject(OrderService);

  allOrders : Orders[] = [];

  ngOnInit(): void {
    this.getUserId()
    
  }

  getUserId(){
    this._AuthService.userData.subscribe({
      next:(res)=>{
        console.log(res);
        res.id && this.getAllOrder(res.id)
      }
    })
  }

  getAllOrder(id:string){
    this._OrderService.getUserOrder(id).subscribe({
      next:(res)=>{
        console.log(res);
        this.allOrders = res  
      }
    })
  }

}
