import { Pipe, PipeTransform } from '@angular/core';
import { OnlyKeysPipe } from './only-keys.pipe';

@Pipe({
  name : 'categoryFilter',
  pure : false
})
export class CategoryFilterPipe implements PipeTransform {
  filterByArray = [];

  public filter(filterby,data){
    console.log('inside filter',filterby);
    let prod = [];
    for(let i in filterby){
      console.log('filter by ',filterby[i]);
      for(let j in filterby[i]){
        console.log('oooooo',filterby[i]);
        data.forEach(function (element) {
          if(filterby[i][j] == element.specs[i])
            prod.push(element);
        })
      }
    }
    return prod;
  }

  transform(products: any[], args: string): any {
    console.log(products);
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
