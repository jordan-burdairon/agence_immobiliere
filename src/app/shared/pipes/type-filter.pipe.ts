import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {

  transform(value: any[], type: string) {
    if(!type) return value;
    return value.filter(item => item.type === type)
  }

}
