import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector : 'amexio-calendar-year1',
    templateUrl: './calendar.year.component.html',
    styleUrls: ['./calendar.common.css'],
})
export class AmexioCalendarYearComponent1 {

    @Input('headers') headers: any[];

    @Input('calendar-data') calendaryData: any[];

    @Output('onEventClicked') onEventClicked = new EventEmitter<any>();

    constructor() {
    }

    eventClicked(event: any, eventData: any) {
        if(eventData.isEvent) {
            const eventObject = {
                event: event,
                this: eventData
            };
            this.onEventClicked.emit(eventObject);    
        }
    }
    
}