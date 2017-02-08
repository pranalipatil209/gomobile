import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { product } from './product-class';

@Component({
  selector: 'product-card',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class MyProduct implements OnInit {

  constructor(private router:Router) { }
  @Input() prod: product;
  camera = " MP";
  storage = " GB";
  goToProductDetails(prod) {
    let data = JSON.stringify(prod);
    this.router.navigate(['home/product',{q:data}]);
  }
  ngOnInit() {

  }

}
