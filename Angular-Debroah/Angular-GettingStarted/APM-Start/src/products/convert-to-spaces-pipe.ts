import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'ConvertToSpacesPipe'
})
export class ConvertToSpacesPipe implements PipeTransform {

  transform(value: string, char: string): string {
    console.log('Char is' + char);
    console.log('Value is' + value);
    return value.replace(char, ' ');
  }
}
