import { CheckOutComponent } from './features/components/check-out/check-out.component';
import { Routes } from '@angular/router';
import { ProductsComponent } from './features/components/products/products.component';
import { CategoriesComponent } from './features/components/categories/categories.component';
import { BrandsComponent } from './features/components/brands/brands.component';
import { HomeComponent } from './features/components/home/home.component';
import { SingleProductComponent } from './features/components/single-product/single-product.component';
import { CartComponent } from './features/components/cart/cart.component';
import { NotfoundComponent } from './features/components/notfound/notfound.component';
import { LoginComponent } from './features/components/login/login.component';
import { RegisterComponent } from './features/components/register/register.component';
import { authGuard } from './core/guard/auth/auth.guard';
import { loggedUserGuard } from './core/guard/auth/logged-user.guard';
import { OrdersComponent } from './features/components/orders/orders.component';

export const routes: Routes = [
    {path:'',redirectTo:'/login', pathMatch:'full'},
    {path:'home', component:HomeComponent, title:'Home', canActivate:[authGuard]},
    {path:'cart', component:CartComponent, title:'Cart', canActivate:[authGuard]},
    {path:'products', component:ProductsComponent, title:'Products', canActivate:[authGuard]},
    {path:'productDetails/:id', component:SingleProductComponent, title:'productDetails', canActivate:[authGuard]},
    {path:'categories', component:CategoriesComponent, title:'Categories', canActivate:[authGuard]},
    {path:'brands', component:BrandsComponent, title:'Brands', canActivate:[authGuard]},
    {path:'checkout/:cartId', component:CheckOutComponent, title:'CheckOut', canActivate:[authGuard]},
    {path:'allorders', component:OrdersComponent, title:'All Orders', canActivate:[authGuard]},
    {path:'login', component:LoginComponent, title:'LogIn', canActivate:[loggedUserGuard]},
    {path:'register', component:RegisterComponent, title:'Register', canActivate:[loggedUserGuard]},
    {path:'**', component:NotfoundComponent, title:'Error 404'},
];
