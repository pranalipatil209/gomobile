import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { product } from './product-class';

@Component({
  selector: 'product-card',
  inputs : ['product'],
  outputs : ['productSelected'],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class MyProduct implements OnInit {

  constructor() { }
  @Input() prod: product;
  camera = " MP";

  ngOnInit() {

  }

}
