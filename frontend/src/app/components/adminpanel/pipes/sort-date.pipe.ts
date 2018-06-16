import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortDate'
})
export class SortDatePipe implements PipeTransform {

  transform(value: any, sortDateStatus: boolean): any {
    if (value.length === 0) {
      return value;
    }
    var resultArray = [];
    if (sortDateStatus == true) {
      value.forEach(element => {
        resultArray.push(element);
      });
      resultArray.sort((a,b) => {
        return a.date - b.date;
      })
      return resultArray;
    } else {
      return value;
    }
  }

}
