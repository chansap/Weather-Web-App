import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateShortner'
})
export class DateShortnerPipe implements PipeTransform {

  transform(value: String): String {
    return value.substring(0, value.length-3);
  }

}
