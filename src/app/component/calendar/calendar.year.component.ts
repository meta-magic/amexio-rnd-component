import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'amexio-calendar-year1',
    templateUrl: './calendar.year.component.html',
    styleUrls: ['./calendar.common.css'],
})
export class AmexioCalendarYearComponent1 {

    @Input('headers') headers: any[];

    @Input('calendar-data') calendaryData: any[];

    @Output('onEventClicked') onEventClicked = new EventEmitter<any>();

    @Output('onHeaderClicked') onHeaderClicked = new EventEmitter<any>();

    constructor() {
    }

    eventClicked(event: any, eventData: any) {
        const eventObject = {
            event: event,
            this: eventData
        };
        this.onEventClicked.emit(eventObject);
    }

    monthClicked(event: any) {
        this.onHeaderClicked.emit(event);
    }

}