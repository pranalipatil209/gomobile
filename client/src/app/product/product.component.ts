import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class product {
  id : number;
  name : string;
  price : number;
  rating : number;
  description : string;
  image : {
    large : string,
    small : string
  };
  specs : {
    manufacturer : string,
    storage : string,
    os : string,
    camera : number
  };
}

export class ProductComponent implements OnInit {

  prod : product;
  constructor() { }

  ngOnInit() {
  }

}
