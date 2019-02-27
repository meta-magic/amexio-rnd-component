import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'amexio-calendar-month1',
    templateUrl: './calendar.month.html',
    styleUrls: ['./calendar.common.css'],
})
export class AmexioCalendarMonthComponent1 {

    @Input('headers') headers: any[];

    @Input('calendar-data') calendaryData: any[];

    @Input('calendar-row') calendarRow: any[];

    @Output('onEventClicked') onEventClicked = new EventEmitter<any>();

    constructor() {
    }

    eventClicked(event: any, eventData: any) {
        const eventObject = {
            event: event,
            this: eventData.details
        };
        this.onEventClicked.emit(eventObject);
    }
}
