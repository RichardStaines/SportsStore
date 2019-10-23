import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";

@Injectable()
export class Order {
  public id: number;
  public name: string;
  public address: string;
  public city: string;
  public county: string;
  public postcode: string;
  public country: string;
  public shipped: boolean = false;

  constructor(public cart: Cart) { }

  clear() {
    this.id = null;
    this.name = this.address = this.city = this.county = this.postcode = this.country = null;
    this.shipped = false;
    this.cart.clear();
  }
}
