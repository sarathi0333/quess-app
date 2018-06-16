import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortZone'
})
export class SortZonePipe implements PipeTransform {

  transform(value: any, sortZoneStatus: boolean): any {
    if (value.length === 0) {
      return value;
    }
    var resultArray = [];
    if(sortZoneStatus == true) {
      value.forEach(element => {
        resultArray.push(element);
      });
      resultArray.sort((a,b) => {
        var zoneA = a.zone.toLowerCase();
        var zoneB = b.zone.toLowerCase();
        if(zoneA < zoneB) {
          return -1;
        }
        if (zoneA > zoneB) {
          return 1;
        }
        return 0;
      });
      return resultArray;
    } else {
      return value;
    }
  }

}
