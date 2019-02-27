import { Component, Input } from '@angular/core';

@Component({
    selector: 'amexio-calendar-month1',
    templateUrl: './calendar.month.html',
})
export class AmexioCalendarMonthComponent1 {

    @Input('headers') headers: any[];

    @Input('calendar-data') calendaryData: any[];

    @Input('calendar-row') calendarRow: any[];

}
