import { Routes } from '@angular/router';
import { ProductsComponent } from './features/components/products/products.component';
import { HomeComponent } from './features/components/home/home.component';
import { SingleProductComponent } from './features/components/single-product/single-product.component';
import { NotfoundComponent } from './features/components/notfound/notfound.component';
import { LoginComponent } from './features/components/login/login.component';
import { RegisterComponent } from './features/components/register/register.component';
import { authGuard } from './core/guard/auth/auth.guard';
import { loggedUserGuard } from './core/guard/auth/logged-user.guard';

export const routes: Routes = [
    {path:'',redirectTo:'/login', pathMatch:'full'},
    {path:'home', component:HomeComponent, title:'Home', canActivate:[authGuard]},
    {path:'cart', 
    loadComponent:()=> {return import('./features/components/cart/cart.component').then((c)=>{return c.CartComponent })}, title:'Cart', canActivate:[authGuard]},
    {path:'products', 
        component:ProductsComponent, title:'Products', canActivate:[authGuard]},
    {path:'productDetails/:id', component:SingleProductComponent, title:'productDetails', canActivate:[authGuard]},
    {path:'categories', 
        loadComponent:()=> {return import('./features/components/categories/categories.component').then((c)=>{return c.CategoriesComponent })}, 
        title:'Categories', canActivate:[authGuard]},
    {path:'brands', 
        loadComponent:()=> {return import('./features/components/brands/brands.component').then((c)=>{return c.BrandsComponent })}, 
        title:'Brands', canActivate:[authGuard]},
    {path:'checkout/:cartId', 
        loadComponent:()=> {return import('./features/components/check-out/check-out.component').then((c)=>{return c.CheckOutComponent })}, 
        title:'CheckOut', canActivate:[authGuard]},
    {path:'allorders', 
        loadComponent:()=> {return import('./features/components/orders/orders.component').then((c)=>{return c.OrdersComponent })}, 
        title:'All Orders', canActivate:[authGuard]},
    {path:'login', component:LoginComponent, title:'LogIn', canActivate:[loggedUserGuard]},
    {path:'register', component:RegisterComponent, title:'Register', canActivate:[loggedUserGuard]},
    {path:'**', component:NotfoundComponent, title:'Error 404'},
];
