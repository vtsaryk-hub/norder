import {Pipe, PipeTransform} from '@angular/core';
import {formatDate} from "@angular/common";


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  private predicate(obj: { [key: string]: any }, queryString: string) {
    const dataString = Object.keys(obj).reduce((currentTerm: string, key: string) => {
      let objVal = obj[key];
      if (obj[key] instanceof Date) {
        objVal = formatDate(obj[key], 'd MMM, y', 'en-NZ')
      }
      return currentTerm + objVal + '◬';
    }, '').toLowerCase();
    return dataString.indexOf(queryString) != -1;
  }

  transform(data: any[], query: string, callback: (filteredData: any[]) => void = () => {
  }): any[] {
    const queryString = query.trim().toLowerCase();
    const filteredData = (query === '') ? data :
      data.filter(obj => this.predicate(obj, queryString));
    callback(filteredData);
    return filteredData;
  }

}
