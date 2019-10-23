import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs";
import { Order } from "./order.model";

@Injectable()
export class StaticDataSource {

  private products: Product[] = [
    new Product(1, "Horse", "Category 1", "Description 1", 5000),
    new Product(2, "Pig", "Category 1", "Description 2", 500),
    new Product(3, "Sheep", "Category 1", "Description 3", 200),
    new Product(4, "Cow", "Category 1", "Description 4", 800),
    new Product(5, "Llama", "Category 1", "Description 5", 1000),
    new Product(6, "Boat", "Category 2", "Description 6", 100000),
    new Product(7, "Car", "Category 2", "Description 7", 20000),
    new Product(8, "Kayak", "Category 2", "Description 8", 350),
    new Product(9, "Cycle", "Category 2", "Description 9", 100),
    new Product(10, "Walk", "Category 2", "Description 10", 10),
    new Product(11, "Product 11", "Category 3", "Description 11", 1100),
    new Product(12, "Product 12", "Category 3", "Description 12", 1200),
    new Product(13, "Product 13", "Category 3", "Description 13", 1300),
    new Product(14, "Product 14", "Category 3", "Description 14", 100),
    new Product(15, "Product 15", "Category 3", "Description 15", 100),
  ];

  getProducts(): Observable<Product[]> {
    return from([this.products]);
  }

  saveOrder(order: Order): Observable<Order> {
    console.log(JSON.stringify(order));
    return from([order]);
  }
}
