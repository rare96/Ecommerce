import { Categories } from "./categories";

export interface Cart {
    numOfCartItems: number,
    cartId: string,
    data: CartData,
  }
  
  export interface CartData {
    _id: string,
    cartOwner: string,
    products: Product[],
    totalCartPrice: number,
  }
  
  export interface Product {
    count: number,
    _id: string,
    product: ProductDetails,
    price: number,
  }

  export interface ProductDetails {
    subcategory: Subcategory[];
    _id: string;
    title: string;
    quantity: number;
    imageCover: string;
    category: Categories;
    brand: Categories;
    ratingsAverage: number;
    id: string;
  }
  
 
  export interface Subcategory {
    _id: string;
    name: string;
    slug: string;
    category: string;
  }
  