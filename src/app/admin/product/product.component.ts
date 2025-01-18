import { Component } from '@angular/core';
import { Product } from '../../shared/interfaces/product';
import { Category } from '../../shared/interfaces/category';

@Component({
  selector: 'app-product',
  standalone: false,

  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
product={} as Product;
products=[] as Product[];
categories=[] as Category[];
  constructor() { }
  deleteProduct(productId:number)
  {
    console.log(productId);
  }
}
