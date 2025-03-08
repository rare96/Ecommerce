import { Component, inject } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';
import { Products } from '../../../shared/interfaces/products';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from "../../../core/pipes/search/search.pipe";
import { LoaderComponent } from "../loader/loader.component";
import { RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-products',
  imports: [FormsModule, SearchPipe, RouterLink, LoaderComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  _ProductsService = inject(ProductsService);
  _CartService = inject(CartService);
  _ToastrService = inject(ToastrService);

  allProducts : Products[] = [];
  searchTerm: string = '';


  ngOnInit(): void {
    this._ProductsService.getAllProducts().subscribe({
      next:(res)=>{
        this.allProducts = res.data;
        console.log(this.allProducts);
      }, 
      error:(err)=>{
        console.log(err);
      }
    })
  }

  addToCart(id:string){
    this._CartService.addProductToCart(id).subscribe({
      next:(res)=>{
        console.log(res);
        this._ToastrService.success(res.message);
      }
    })
  }
}
