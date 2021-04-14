import { Component, Input, OnInit } from '@angular/core';
import {Renderer2} from '@angular/core';

import { ProductService } from "../../services/products.service";
import { Product } from "../../model/product";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    public socialActive:boolean = false;
    public showModal:boolean = false;
    public product:Product;
    public prodID:number;
    private sub;
    @Input() set productID(value)
    {
      this.prodID = value.productID;
      this.sub = this.productService.getProducts('./assets/mock-data/products.json')
      .subscribe(res => {
          this.product = res[this.prodID];
      })
      this.showModal = true;
    };

    constructor(private productService:ProductService,private render:Renderer2) { }

    ngOnInit(){}

    selectBtn(event:any){
      Array.from(document.querySelectorAll(".btn-size")).forEach((elem)=>
      {
        elem.classList.remove("selected");
      })
      this.render.addClass(event.target,"selected");
    }

    toogleSocial()
    {
      this.socialActive = !this.socialActive;
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
