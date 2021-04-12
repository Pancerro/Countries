import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noData'
})
export class NoDataPipe implements PipeTransform {

  transform(value: string): string {
    if (value === null || value === '' || value === undefined) {
      return '-';
    } else {
      return value;
    }
  }

}
