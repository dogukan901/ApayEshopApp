import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import * as alertify from 'alertifyjs';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';


// declare let alertify: any;

@Component({
  selector: 'app-product',
  templateUrl: "./product.component.html",
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService, private productService: ProductService, private activatedRoute: ActivatedRoute) { }
  title = "PRODUCT LIST"
  filterText = ""
  products: Product[] = [];
  name = "Your products will be listed here"



  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.productService.getProducts(params["categoryId"]).subscribe(data => {
        this.products = data;
      });
    })


  }
  addToCart(product) {
    // alert(`${product.name} Added To Cart`)//don't need that anymore since I have implemented the alertifyjs
    // alertify.success(`${product.name} Added To Cart`);

    this.alertifyService.success(`${product.name} Added To Cart`)
  }

}
