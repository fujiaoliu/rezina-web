import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(data, term) {
      return term ? data.filter(item => this.findInObj(item, term.toLowerCase())): data;
  }

  findInObj(obj, term) {
    for(var key in obj) {
      try {
        if (obj[key].toLowerCase().indexOf(term) !== -1) {
          return true;
        }
      }
      catch(err) {
        continue;
      }
    }
    return false;
  }
}
