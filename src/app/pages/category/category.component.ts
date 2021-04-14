import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/products.service";
import { Product } from "../../model/product";

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

    private sub;
    public productID:number;
    public products:Array<Product>;
    public displayProduct:boolean = false;
    public productIDJSON:{} = {productID : -1, randomNO : 949};

    constructor(private productService:ProductService) { }

    ngOnInit() {
      this.sub = this.productService.getProducts('./assets/mock-data/products.json')
      .subscribe(res => {
          this.products = res;
      })

      document.addEventListener("touchstart", function() {}, true);

    };

    setProdID(i)
    {
      this.productIDJSON = {productID : i, randomNO : Math.floor(Math.random() * 949) + 1  };
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
