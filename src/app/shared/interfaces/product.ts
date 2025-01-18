import {  Order } from "./order";
import { Category } from './category';

export interface Product {

  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  photo: string;
  category: Category;




}
