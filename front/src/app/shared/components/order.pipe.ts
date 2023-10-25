import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(list: Object[], params?: string): Object[] {
    if(params.length){
      return list.sort();
    }
    return list;
  }

}
