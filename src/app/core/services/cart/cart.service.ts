import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient : HttpClient) { }

  token:string = JSON.stringify(localStorage.getItem('myToken'));

  addProductToCart(productId:string):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`,{productId},{
      headers:{
        token: JSON.parse(this.token)
      }
    })
  }


  updateProductQuantity(productId:string, count:string):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{count},{
      headers:{
        token: JSON.parse(this.token)
      }
    })
  }


  getLoggedUserCart():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
      headers:{
        token: JSON.parse(this.token)
      }
    })
  }


  removeSpecificItem(productId:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
      headers:{
        token: JSON.parse(this.token)
      }
    })
  }


  clearCart():Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{
      headers:{
        token: JSON.parse(this.token)
      }
    })
  }


}
