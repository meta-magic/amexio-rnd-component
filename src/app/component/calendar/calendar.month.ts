import { Component, Input } from "@angular/core";

@Component({
    selector : 'amexio-calendar-month',
    templateUrl : './calendar.month.html'
})
export class AmexioCalendarMonth {

    @Input('headers') headers : any[];

    @Input('calendar-data') calendaryData : any[];

    @Input('calendar-row') calendarRow : any[];



}