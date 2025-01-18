import { Payment } from "./payment";
import { Product } from "./product";
import { User } from "./user";

export interface Commande {

  id?:number;
  date:Date;
  status:string;
  user:User;
  products:Product[];
  payment:Payment;

}
