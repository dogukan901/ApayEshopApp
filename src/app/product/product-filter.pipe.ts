import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(items: Product[], filterText?: string): Product[] {
    // function checkIfproductExists(p: Product): any {
    //   let lowercaseditemname = p.name.toLocaleLowerCase;
    //   if (p) {
    //     return lowercaseditemname;
    //   }
    //   return [];
    // }
    filterText ? filterText.toLocaleLowerCase() : items;
    return items ? (filterText ? items.filter((it: Product) =>
      it.name.toLocaleLowerCase().includes(filterText)
    ) : items) : [];

  }

}
