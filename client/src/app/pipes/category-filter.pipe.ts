import { Pipe, PipeTransform } from '@angular/core';
import { OnlyKeysPipe } from './only-keys.pipe';

@Pipe({
  name : 'categoryFilter',
  pure : false
})
export class CategoryFilterPipe implements PipeTransform {
  filterByArray = [];

  public filter(filterby,data){
    let prod = [];
    let products = data;
    for(let i in filterby){
      for(let j in filterby[i]){
        products.forEach(function (element) {
          if(filterby[i][j] == element.specs[i])
            prod.push(element);
        });
        products = prod;
        prod = [];
      }
    }
    return products;
  }

  transform(products: any[], args: string): any {
    let filterby = JSON.parse(args);
    let prod = [];
    let keys = new OnlyKeysPipe().transform(filterby);
    if(typeof products == 'object' && !null) {
      for(let key in keys){
        let i = keys[key];
        if(filterby[i].length != 0)
          this.filterByArray[key] = i;
      }
      if(filterby != null) {
        prod = this.filter(filterby, products);
        return prod;
      }
      else {
        prod = products;
        return prod;
      }
    }
    else {
      console.log('from filter pipe - no its not an object');
    }
    return prod;
  }
}
