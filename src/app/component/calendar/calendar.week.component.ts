import { Component, Input } from "@angular/core";


@Component({
    selector : 'amexio-calendar-week',
    templateUrl : './calendar.week.component.html'
})
export class AmexioCalendarWeek {

    @Input('headers') headers : any[];

    @Input('calendar-data') calendaryData : any[];

    @Input('calendar-row') calendarRow : any[];

}