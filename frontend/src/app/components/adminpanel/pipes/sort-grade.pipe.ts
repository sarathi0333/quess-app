import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortGrade'
})
export class SortGradePipe implements PipeTransform {

  transform(value: any, sortSatus: boolean): any {
    if (value.length === 0) {
      return value;
    }
    var resultArray = [];
    var goodArray =[];
    var moderateArray = [];
    var poorArray = [];
    if (sortSatus == true) {
      for(let result of value) {
        if(result.grade == 'Poor') {
          poorArray.push(result);
        } else if( result.grade == 'Good') {
          goodArray.push(result);
        } else if (result.grade == 'Moderate') {
          moderateArray.push(result);
        }
      }
      resultArray = [...goodArray, ...moderateArray, ...poorArray];
      return resultArray;
    } else {
      return value;
    }
  }
}
