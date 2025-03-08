import { Component, inject } from '@angular/core';
import { Cart } from '../../../shared/interfaces/cart';
import { CartService } from '../../../core/services/cart/cart.service';
import { LoaderComponent } from "../loader/loader.component";
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  imports: [LoaderComponent, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  _CartService = inject(CartService);
  _ToastrService = inject(ToastrService);

  cartDetails!:Cart;
  isLoading:boolean = true;
  emptyCart:boolean = false;

  ngOnInit(): void {
    this.getLoggedUserCart()
    
  }

  getLoggedUserCart(){
    this._CartService.getLoggedUserCart().subscribe({
      next:(res)=>{
        console.log(res);
        this.cartDetails = res;
        this.isLoading = false;
      }
    })
  }


  removeItem(id:string){
    this.isLoading = true;
    this._CartService.removeSpecificItem(id).subscribe({
      next:(res)=>{
        this.cartDetails = res;
        this.isLoading = false;
        this._ToastrService.info("Item Removed Succesfully");
      }
    })
  }

  updateCount(id : string,count:number){
    this.isLoading = true;
    this._CartService.updateProductQuantity(id,`${count}`).subscribe({
      next:(res)=>{
        this.cartDetails = res;
        this.isLoading = false;
        this._ToastrService.info("Item Updated Succesfully");
      }
    })
  }

  clearCart(){
    this.isLoading = true;
    this._CartService.clearCart().subscribe({
      next:(res)=>{
        if(res.message =='success'){
          this.cartDetails = {} as Cart;
          this.isLoading = false;
          this.emptyCart = true;
          this._ToastrService.error("Cart is Cleared");
        }
      }
    })
  }
}
