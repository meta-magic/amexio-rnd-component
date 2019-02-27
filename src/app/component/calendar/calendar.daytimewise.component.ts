import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'amexio-calendar-day-timewise1',
    templateUrl: './calendar.daytimewise.component.html',
    styleUrls: ['./calendar.common.css'],
})
export class AmexioCalendarDayTimeWiseComponent1 implements OnInit {

    @Input('headers') headers: any[];

    @Input('calendar-data') calendaryData: any[];

    @ViewChild('headerRow') headerRow: ElementRef;

    @Output('onEventClicked') onEventClicked = new EventEmitter<any>();

    width: number;

    constructor() {
    }

    ngOnInit() {
        this.width = (this.headerRow.nativeElement.offsetWidth - 50) / 7;
        if ((this.width - 50) > 50) {
            this.width = this.width - 50;
        }
    }

    eventClicked(event: any, eventData: any) {
        debugger;
        const eventObject = {
            event: event,
            this: eventData.eventDetails.details,
        };
        this.onEventClicked.emit(eventObject);
    }
}
