import { Pipe, PipeTransform } from '@angular/core';
import {product} from '../product/product-class';

@Pipe({
  name : 'categoryFilter',
  pure : false
})
export class CategoryFilterPipe implements PipeTransform {

  transform(products: any[], args: string[]): any {
    if(typeof products == 'object'){
       console.log('from filter pipe - yes its object',products);
       console.log('args - ',args);
      // let resultArray = [];
      // if(args.length === 0){
      //
      // }
    }
    else {
      console.log('from filter pipe - no its not an object');
    }
    return products;
  }

}
