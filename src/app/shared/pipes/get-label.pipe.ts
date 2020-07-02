import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'getLabel' })
export class GetLabelPipe implements PipeTransform {
  transform(value: number, data = []): string {
    let result = '';
    if (data && data.length > 0) {
      // tslint:disable-next-line: prefer-for-of
      for (let index = 0; index < data.length; index++) {
        const item = data[index];
        if (item.value === value) {
          result = item.label;
          break;
        }
      }
    }
    return result;
  }
}
