import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'calendar-header-pipe',
})
@Injectable()
export class CalendarHeaderPipe implements PipeTransform {
    transform(dataOf: string, type: string): any[] {
        return [''];
    }
}