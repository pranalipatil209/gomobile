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
// = {
//   "id": 1,
//   "name": "Sony Xperia Z3",
//   "price": 899,
//   "specs": {
//     "manufacturer": "Sony",
//     "storage": 16,
//     "os": "Android",
//     "camera": 15
//   },
//   "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.",
//   "rating": 4,
//   "image": {
//     "small": ".././assets/iphone6.jpg",
//     "large": ".././assets/iphone6-large.jpg"
//   }
// };
  ngOnInit() {

  }

}
