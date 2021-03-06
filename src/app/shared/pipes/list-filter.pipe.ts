import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listFilter'
})
export class ListFilterPipe implements PipeTransform {

  transform(value: any[], search: string) {
    if(!search) return value;
    return value.filter(item =>  item.title.toLowerCase().includes(search.toLowerCase()))
  }
}
