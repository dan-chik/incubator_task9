import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "./products";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) return null;
    if(!args) return value;

    args=args.toLowerCase();
    debugger;
    return value.filter(function(category: any){
      return JSON.stringify(category).toLowerCase().includes(args);
    });
  }

}
