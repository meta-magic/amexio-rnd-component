import { Component, Input } from "@angular/core";


@Component({
    selector : 'amexio-calendar-day-timewise',
    templateUrl : './calendar.daytimewise.component.html'
})
export class AmexioCalendarDayTimeWise {

    @Input('headers') headers : any[];

    @Input('calendar-data') calendaryData : any[];
 

    constructor(){
        
    }
}