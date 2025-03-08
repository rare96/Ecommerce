import { Component, inject } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';
import { Products } from '../../../shared/interfaces/products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../core/services/cart/cart.service';

@Component({
  selector: 'app-single-product',
  imports: [],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss'
})
export class SingleProductComponent {
  _ProductsService = inject(ProductsService);
  _ActivatedRoute = inject(ActivatedRoute);
  _CartService = inject(CartService);


  productDetails !: Products;
  isLoading : boolean = false;

  ngOnInit(): void {
  
    let productId = this._ActivatedRoute.snapshot.params?.['id'];
    this._ProductsService.getSpecificProduct(productId).subscribe({
      next:(res)=>{
        this.productDetails = res.data;
      },
      error:()=>{},
      
    })
    
  }

  addToCart(id:string){
    this.isLoading = true
    this._CartService.addProductToCart(id).subscribe({
      next:(res)=>{
        console.log(res);
        this.isLoading = false;
      }
    })
  }
  
}
