import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {

    transform(items: any[], begin: number, deleteCount: number): any {
        return items.filter((item, index) => index >= begin && index <= begin + deleteCount);
    }

}
