import { Component, Input, OnInit } from "@angular/core";
import { CALENDAR } from "./calendar.const";
import { AmexioDateUtils } from "../utils/dateutils";


@Component({
    selector: 'amexio-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.css']
})
export class AmexioCalendarComponent implements OnInit {

    displayHeaders: string[] = [];
    calendaryData: any[] = [];
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
        }else if(this.currentState === CALENDAR.WEEK){
            const weekDays : any[] = new AmexioDateUtils().createDaysForWeek(selectedPeriod, this.currrentDate);
            this.displayHeaders = weekDays;
            this.createDaysForCurrentWeek(selectedPeriod);
        }
    }

    private createDaysForCurrentMonths(selectedPeriod: any) {
        this.calendaryData = [];
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
            this.calendaryData.push(rowDays);
        });     
    }

    private createDaysForCurrentWeek(selectedPeriod: any) {
        console.log("generate week days");
    }
    
    setState(state: string){
        this.currentState = state;
        this.createData(this.currrentDate);
    }

    previous() {
        let newDate = new Date(this.currrentDate.getTime());
        if (this.currentState === CALENDAR.MONTH) {
            newDate = this.currrentDate.setMonth(this.currrentDate.getMonth() - 1);
        }else if(this.currentState === CALENDAR.WEEK){
            newDate = new AmexioDateUtils().getPrevSunday(newDate);
        }
        this.currrentDate = new Date(newDate);
        this.createData(this.currrentDate);
    }

    next() {
        debugger;
        let newDate = new Date(this.currrentDate.getTime());
        if (this.currentState === CALENDAR.MONTH) {
            newDate = this.currrentDate.setMonth(this.currrentDate.getMonth() + 1);
        }else if(this.currentState === CALENDAR.WEEK){
            newDate = new AmexioDateUtils().getNextSunday(newDate);
        }
        this.currrentDate = new Date(newDate);
        this.createData(this.currrentDate);
    }

  

}