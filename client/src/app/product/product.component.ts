import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class product {
  id : number;
  name : string;
  manufacturer : string;
  storage : string;
  os : string;
  camera : number;
  img : string;
  description : string;
}

export class ProductComponent implements OnInit {

  prod : product;
  constructor() { }

  ngOnInit() {
  }

}
