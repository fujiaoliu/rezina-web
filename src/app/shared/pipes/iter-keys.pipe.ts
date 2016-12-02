import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'iterKeys' })
export class IterKeysPipe implements PipeTransform {
  transform(data) {
      return Object.keys(data);
  }
}
