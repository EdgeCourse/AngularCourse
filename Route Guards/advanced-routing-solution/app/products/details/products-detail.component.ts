import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

class Product {
  name!: string;
  description!: string;
  image!: string;
}

@Component({
  selector: 'products-Detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {

  // any works as well
  product: Product = { name: "iPhone", description: "Apple smartphone", image: "/images/iphone.jpg" };
  products: Product[] = [];
  id: number = 0;

  constructor(private ProductsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.products = this.ProductsService.getProductsData();
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.product = this.products[this.id];
    });
  }

}
