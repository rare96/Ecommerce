import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShippingAddress } from '../../../shared/interfaces/shippingAddress';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _HttpClient: HttpClient) { }

  token: string = JSON.stringify(localStorage.getItem('myToken'));

  cashOrder(cartId: string, shippingAddress: ShippingAddress): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`, { shippingAddress }, {
      headers: {
        token: JSON.parse(this.token)
      }
    }

    )
  }


  getAllOrder(): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/`)
  }


  getUserOrder(id: string): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)
  }


  onlinePayment(id: string, shippingAddress: ShippingAddress): Observable<any> {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`, { shippingAddress },
      {
        headers: {
          token: JSON.parse(this.token)
        }
      }
    )
  }
}




