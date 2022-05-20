import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kakko'
})
export class KakkoPipe implements PipeTransform {

  transform(value: string): unknown {
    return `(${value ?? ''})`
  }

}
