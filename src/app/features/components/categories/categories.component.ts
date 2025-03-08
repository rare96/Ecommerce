import { Component, inject } from '@angular/core';
import { CategoriesService } from '../../../core/services/categories/categories.service';
import { Categories } from '../../../shared/interfaces/categories';
import { LoaderComponent } from "../loader/loader.component";

@Component({
  selector: 'app-categories',
  imports: [LoaderComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

  _CategoriesService = inject(CategoriesService);

  allCategories : Categories[] = [];


  ngOnInit(): void {
    this._CategoriesService.getAllCategories().subscribe({
      next:(res)=>{
        this.allCategories = res.data;
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
    
  }


}
