import { Pipe, PipeTransform } from '@angular/core';
import { OnlyKeysPipe } from './only-keys.pipe';

@Pipe({
  name : 'categoryFilter',
  pure : false
})
export class CategoryFilterPipe implements PipeTransform {
  filterByArray = [];
  transform(products: any[], args: string): any {
    let filterby = JSON.parse(args);
    console.log('filt',filterby );
    let keys = new OnlyKeysPipe().transform(filterby);
    if(typeof products == 'object' && !null) {
      for(let key in keys){
        let i = keys[key];
        if(filterby[i].length != 0)
          this.filterByArray[key] = i;
      }
    }
    else {
      console.log('from filter pipe - no its not an object');
    }
    console.log(this.filterByArray);
    return products;
  }

}
