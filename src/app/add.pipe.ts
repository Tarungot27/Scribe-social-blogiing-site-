import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'add'
})
export class AddPipe implements PipeTransform {

  transform(value: string, args?: any): any {

    if(args == "male"){

        return "Hello Mr. " + value;

    } else {

        return "Hello Mrs. " + value;

    }

}

}
