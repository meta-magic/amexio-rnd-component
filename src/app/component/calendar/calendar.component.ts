import { Component, Input, OnInit } from "@angular/core";
import { CALENDAR } from "./calendar.const";
import { AmexioDateUtils } from "../utils/dateutils";
import { CalendarEventModel } from "./calendarevent.model";


@Component({
    selector: 'amexio-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css']
})
export class AmexioCalendarComponent implements OnInit {

    displayHeaders: string[] = [];
    calendarMonthData: any[] = [];
    calendarWeekData: any[] = [];
    currrentDate: any;

    currentState: string; // month/week/day

    @Input('header-type') headertype: string;//short/full/min

    @Input('events') events: any[];

    constructor() {
        this.currentState = CALENDAR.MONTH;
        this.headertype = CALENDAR.SHORT;
        this.currrentDate = new Date();
        this.events = [];
    }

    ngOnInit() {
        this.initCalendar();
    }

    initCalendar() {
        this.validateEventData();
        this.createData(this.currrentDate);
    }


    private validateEventData() {
        let newEvents = [];
        this.events.forEach((event: any) => {
            if ((event.start + "").indexOf("T") != -1) {
                event.hasTimeSlot = true;
            }
            if (event.end) {
                const events1 = this.generatEventData(new Date(event.start), new Date(event.end));
                events1.forEach((event1) => {
                    const newobj = Object.assign({}, event);
                    newobj.start = event1;
                    newEvents.push(newobj);
                });
            }
        });
        newEvents.forEach((event) => {
            this.events.push(event);
        });
    }

    private generatEventData(startDate: any, endDate: any) {
        const event = [];
        let flag = false;
        while (startDate.getTime() <= endDate.getTime()) {
            if (flag) {
                event.push(new Date(startDate.getTime()));
            }
            flag = true;
            startDate.setDate(startDate.getDate() + 1);
        }
        return event;
    }

    private hasEvent(date: any) {
        const eventsData = [];
        const flag = { isEvent: false, events: [] };
        if (this.events && this.events.length > 0) {
            this.events.forEach((event: any) => {
                const eventStartDate = new Date(event.start);
                const isEvent = new AmexioDateUtils().isDateEqual(date, eventStartDate);
                if (isEvent) {
                    eventsData.push(new CalendarEventModel(isEvent, event, event.title, event.hasTimeSlot, date, null));
                    flag.isEvent = isEvent;
                }
            });
        }
        flag.events = eventsData;
        return flag;
    }

    private createData(selectedPeriod: any) {
        if (this.currentState === CALENDAR.MONTH) {
            this.displayHeaders = CALENDAR.DAY_NAME[this.headertype];
            this.createDaysForCurrentMonths(selectedPeriod);
        } else if (this.currentState === CALENDAR.WEEK || this.currentState === CALENDAR.DAY) {
            let weekDays: any[];
            if (this.currentState === CALENDAR.WEEK) {
                weekDays = new AmexioDateUtils().createDaysForWeek(selectedPeriod, this.currrentDate);
            } else {
                weekDays = [];
                weekDays.push(new Date(this.currrentDate.getTime()));
            }
            this.displayHeaders = weekDays;
            this.createDaysForCurrentWeek(selectedPeriod);
        }
    }

    private createDaysForCurrentMonths(selectedPeriod: any) {
        this.calendarMonthData = [];
        const monthData: any[] = new AmexioDateUtils().createDaysForMonths(selectedPeriod, this.currrentDate);
        monthData.forEach((week: any[]) => {
            const rowDays = [];
            week.forEach((day) => {
                const eventDetails = this.hasEvent(day.date);
                if (eventDetails && eventDetails.isEvent) {
                    day.eventDetails = eventDetails;
                    day.isEvent = eventDetails.isEvent;

                }
                rowDays.push(day);
            });
            this.calendarMonthData.push(rowDays);
        });
    }


    private createDaysForCurrentWeek(selectedPeriod: any) {
        this.calendarWeekData = [];

        const allday = { 'title': CALENDAR.ALL_DAY_TEXT, daywiseevent: [], time: null };
        this.displayHeaders.forEach((date: any) => {
            const eventDetails = this.hasWeekEvent(date, true);
            let weekobj = { title: eventDetails.title, eventDateTime: date, isEvent: eventDetails.isEvent, eventDetails: eventDetails };
            allday.daywiseevent.push(weekobj);
        });
        this.calendarWeekData.push(allday);

        CALENDAR.DAY_TIME_SERIES.forEach((time: any) => {
            const dateTime = new Date();
            dateTime.setHours(time.hr, time.min);
            const timeDataDayWise = { 'title': time.hr + ':' + time.min, daywiseevent: [], time: dateTime };
            this.displayHeaders.forEach((day: any) => {
                const dateTime = new Date(day.getTime());
                dateTime.setHours(time.hr, time.min, 0);
                const eventDetails = this.hasWeekEvent(dateTime, false);
                let weekobj = { title: eventDetails.title, eventdatetime: dateTime, isEvent: eventDetails.isEvent, eventDetails: eventDetails };
                timeDataDayWise.daywiseevent.push(weekobj);
            });
            this.calendarWeekData.push(timeDataDayWise);
        });
    }


    private hasWeekEvent(wsd: any, wholeday: boolean) {
        const adu = new AmexioDateUtils();
        const weekDateSlotStart = adu.getDateWithSecondsZero(wsd.getTime());
        const weekDateSlotEnd = adu.getDateWithSecondsZero(weekDateSlotStart.getTime());
        weekDateSlotEnd.setHours(weekDateSlotEnd.getHours(), 59);

        const flag = { isEvent: false, details: null, title: null, hasTimeSlot: false, eventDateTime: null, events: [], diff: 0, diffwithslot: 0 };
        if (this.events && this.events.length > 0) {
            this.events.forEach((event: any) => {
                const eventStartDate = adu.getDateWithSecondsZero(new Date(event.start).getTime());
                let isEvent = false;
                if (event.hasTimeSlot && !wholeday) {
                    if (event.end) {
                        const eventEndDate = adu.getDateWithSecondsZero(new Date(event.end).getTime());
                        isEvent = ((weekDateSlotEnd.getTime() > eventStartDate.getTime()) && (eventStartDate.getTime() >= weekDateSlotStart.getTime()));
                        if (isEvent) {
                            flag.diff = ((eventEndDate.getTime() - eventStartDate.getTime()) / 1000) / 60;
                            flag.diffwithslot = ((eventStartDate.getTime() - weekDateSlotStart.getTime()) / 1000) / 60;
                        }
                    }
                } else if (wholeday && !event.hasTimeSlot) {
                    isEvent = new AmexioDateUtils().isDateEqual(eventStartDate, weekDateSlotStart);
                }

                if (isEvent) {
                    if (isEvent && !flag.isEvent) {
                        flag.hasTimeSlot = event.hasTimeSlot;
                        flag.eventDateTime = eventStartDate;
                        flag.isEvent = isEvent;
                        flag.details = event;
                        flag.title = event.title;
                    }
                }

            });
        }

        return flag;
    }

    setState(state: string) {
        this.currentState = state;
        this.currrentDate = new Date();
        this.createData(this.currrentDate);
        this.currrentDate = new Date();
    }

    previous() {
        let newDate = new Date(this.currrentDate.getTime());
        if (this.currentState === CALENDAR.MONTH) {
            newDate.setMonth(newDate.getMonth() + 1);
        } else if (this.currentState === CALENDAR.WEEK) {
            newDate = new AmexioDateUtils().getPrevSunday(newDate);
        } else if (this.currentState === CALENDAR.DAY) {
            newDate.setDate(newDate.getDate() - 1);
        }
        this.currrentDate = new Date(newDate);
        this.createData(this.currrentDate);
    }

    next() {
        let newDate = new Date(this.currrentDate.getTime());
        if (this.currentState === CALENDAR.MONTH) {
            newDate.setMonth(newDate.getMonth() + 1);
        } else if (this.currentState === CALENDAR.WEEK) {
            newDate = new AmexioDateUtils().getNextSunday(newDate);
        } else if (this.currentState === CALENDAR.DAY) {
            newDate.setDate(newDate.getDate() + 1);
        }
        this.currrentDate = new Date(newDate);
        this.createData(this.currrentDate);
    }



}