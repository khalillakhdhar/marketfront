import { Order } from "./order";

export interface Payment {

  id:number;
  amount:number;
  date:Date;
  method:string;
  order:Order;


}
