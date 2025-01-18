import { Commande } from "./commande";

export interface Payment {

  id:number;
  amount:number;
  date:Date;
  method:string;
  order:Commande;


}
