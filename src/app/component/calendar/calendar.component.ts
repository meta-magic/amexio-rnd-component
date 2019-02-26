import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { CALENDAR } from "./calendar.const";
import { AmexioDateUtils } from "../utils/dateutils";


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
    initiated: boolean;

    _headerType: string;

    _events: any[];

    currentState: string; // month/week/day

    @Input('header-type') //short/full/min
    set headertype(v: string) {
        if (v != null) {
            this._headerType = v;
        }
    }

    get headertype() {
        return this._headerType;
    }

    @Input('events')
    set events(v: any[]) {
        if (v != null) {
            this._events = v;
        }
    }

    get events() {
        return this._events;
    }




    constructor() {
        this.currentState = CALENDAR.MONTH;
        this.headertype = CALENDAR.SHORT;
        this.currrentDate = new Date();
        this.initiated = true;
        this.events = [];
        let i;
        let time = [];
        for (i = 0; i <= 24; i++) {
            console.log({ hr: i, min: 0 });
            time.push({ hr: i, min: 0 });
            time.push({ hr: i, min: 30 });
        }

        console.log(JSON.stringify(time));
    }

    ngOnInit() {
        this.initCalendar();
    }

    initCalendar() {
        if (this.initiated) {
            this.validateEventData();
            this.createData(this.currrentDate);
        }
    }


    private validateEventData() {
        let newEvents = [];
        this.events.forEach((event: any) => {
            if ((event.start + "").indexOf("T") != -1) {
                event.hasTimeSlot = true;
            }
            if (event.end) {
                let eventStartDate = new Date(event.start);
                let eventEndDate = new Date(event.end);

                const events1 = this.generatEventData(eventStartDate, eventEndDate);
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
        console.log(this.events);
    }

    private generatEventData(startDate: any, endDate: any) {
        let event = [];
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
        let flag = { isEvent: false, events: [] };
        if (this.events && this.events.length > 0) {
            this.events.forEach((event: any) => {
                let eventStartDate = new Date(event.start);
                let isEvent = new AmexioDateUtils().isDateEqual(date, eventStartDate);
                if (isEvent) {
                    let flag1 = { isEvent: false, details: null, title: null, hasTimeSlot: false, eventDateTime: null, events: [] };
                    flag1.hasTimeSlot = event.hasTimeSlot;
                    flag1.eventDateTime = date;
                    flag1.isEvent = isEvent;
                    flag1.details = event;
                    flag1.title = event.title;
                    eventsData.push(Object.assign({}, flag1));
                    flag.isEvent = true;
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
        } else if (this.currentState === CALENDAR.WEEK) {
            const weekDays: any[] = new AmexioDateUtils().createDaysForWeek(selectedPeriod, this.currrentDate);
            this.displayHeaders = weekDays;
            this.createDaysForCurrentWeek(selectedPeriod);
        }else if (this.currentState === CALENDAR.DAY) {
            const weekDays: any[] = [];
            weekDays.push(new Date(this.currrentDate.getTime()));
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

        const allday = { 'title': 'all-day', daywiseevent: [], time: null };

        this.displayHeaders.forEach((day: any) => {
            debugger;
            const eventDetails = this.hasWeekEvent(day, true);

            let weekobj = { title: eventDetails.title, eventdatetime: day, isEvent: eventDetails.isEvent, eventDetails: eventDetails };
            allday.daywiseevent.push(weekobj);
        });
        this.calendarWeekData.push(allday);

        const timeSeries: any[] = CALENDAR.DAY_TIME_SERIES;

        timeSeries.forEach((time: any) => {
            const dateTime = new Date();
            dateTime.setHours(time.hr, time.min);
            const timeDataDayWise = { 'title': time.hr + ':' + time.min, daywiseevent: [], time: dateTime };
            this.displayHeaders.forEach((day: any) => {
                const dateTime = new Date(day.getTime());
                dateTime.setHours(time.hr, time.min, 0);
                if (dateTime.getDate() === 26) {
                    debugger;
                }
                const eventDetails = this.hasWeekEvent(dateTime, false);
                // console.log(dateTime.getDay(), " ", dateTime , "   ",eventDetails);
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
        const eventsData = [];
        let flag = { isEvent: false, details: null, title: null, hasTimeSlot: false, eventDateTime: null, events: [], diff: 0 };
        if (this.events && this.events.length > 0) {
            this.events.forEach((event: any) => {
                const eventStartDate = adu.getDateWithSecondsZero(new Date(event.start).getTime());
                let isEvent = false;
                if (event.hasTimeSlot && !wholeday) {
                    if (event.end) {
                        const eventEndDate = adu.getDateWithSecondsZero(new Date(event.end).getTime());
                        isEvent = ((weekDateSlotEnd.getTime() > eventStartDate.getTime()) && (eventStartDate.getTime() >= weekDateSlotStart.getTime()));
                        if (isEvent && !flag.isEvent) {
                            flag.diff = ((eventEndDate.getTime() - eventStartDate.getTime()) / 1000) / 60;
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
        flag.events = eventsData;
        return flag;
    }

    setState(state: string) {
        this.currentState = state;
        this.currrentDate = new Date();
        this.createData(this.currrentDate);
        this.currrentDate = new Date();
    }

    previous() {
        debugger;
        let newDate = new Date(this.currrentDate.getTime());
        if (this.currentState === CALENDAR.MONTH) {
            newDate.setMonth(newDate.getMonth() + 1);
        } else if (this.currentState === CALENDAR.WEEK) {
            newDate = new AmexioDateUtils().getPrevSunday(newDate);
        }else if (this.currentState === CALENDAR.DAY) {
            newDate.setDate(newDate.getDate()-1);
        }
        this.currrentDate = new Date(newDate);
        console.log(this.currrentDate);
        this.createData(this.currrentDate);
    }

    next() {
        let newDate = new Date(this.currrentDate.getTime());
        if (this.currentState === CALENDAR.MONTH) {
            newDate.setMonth(newDate.getMonth() + 1);
        } else if (this.currentState === CALENDAR.WEEK) {
            newDate = new AmexioDateUtils().getNextSunday(newDate);
        }else if (this.currentState === CALENDAR.DAY) {
            newDate.setDate(newDate.getDate()+1);
        }
        this.currrentDate = new Date(newDate);
        console.log(this.currrentDate);
        this.createData(this.currrentDate);
    }



}