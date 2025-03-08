import { Component, inject } from '@angular/core';
import { LoaderComponent } from "../loader/loader.component";
import { CategoriesService } from '../../../core/services/categories/categories.service';
import { Categories } from '../../../shared/interfaces/categories';

@Component({
  selector: 'app-brands',
  imports: [LoaderComponent],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {
  _CategoriesService = inject(CategoriesService);
  
    allBrands : Categories[] = [];


    ngOnInit(): void {
      this._CategoriesService.getAllBrands().subscribe({
        next:(res)=>{
          this.allBrands = res.data;
        },
        error:(err)=>{
          console.log(err);
          
        }
      })
      
    }
}
