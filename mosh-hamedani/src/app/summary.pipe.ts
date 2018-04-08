import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: any, args?: any, third?: any): any {
    return (<string>value).substr(0, args) + '...' + '(formatted using custom pipe)';
  }

}
