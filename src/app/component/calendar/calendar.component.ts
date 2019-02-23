import { Component, Input, OnInit } from "@angular/core";
import { CALENDAR } from "./calendar.const";
import { AmexioDateUtils } from "../utils/dateutils";


@Component({
    selector : 'amexio-calendar',
    templateUrl : './calendar.component.html',
    styleUrls : ['./calendar.component.css']
})
export class AmexioCalendarComponent implements OnInit{

    displayHeaders : string [] = [];
    calendaryData : any [] = [];
    currrentDate : any;
    initiated : boolean;

    _headerType : string;

    _events : any[];

    currentState : string; // month/week/day

    @Input('header-type') //short/full/min
    set headertype(v: string){
        if(v !=null){
            this._headerType = v;
        }
    }

    get headertype(){
        return this._headerType;
    }

    @Input('events') 
    set events(v: any[]){
        if(v !=null){
           this._events = v;
        }
    }

    get events(){
        return this._events;
    }

    

    constructor(){
        this.currentState = CALENDAR.MONTH;
        this.headertype = CALENDAR.SHORT;
        this.currrentDate = new Date();
        this.initiated = true;
        this.events = [];
    }

    ngOnInit(){
        this.initCalendar();
    }
    
    initCalendar(){
        if(this.initiated){
            this.createHeaders();
            this.validateEventData();
            this.createDaysForCurrentMonths(this.currrentDate);    
        }
    }


    private createHeaders(){
        if(this.currentState === CALENDAR.MONTH){
            this.displayHeaders = CALENDAR.DAY_NAME[this.headertype];
        }
    }

    private validateEventData(){
        let newEvents = [];
        this.events.forEach((event:any) =>{
            if((event.start+"").indexOf("T") !=-1){
                event.hasTimeSlot = true;
            }
            if(event.end){
                let eventStartDate = new Date(event.start);
                let eventEndDate = new Date(event.end);
                
                const events1  = this.generatEventData(eventStartDate,eventEndDate);
                events1.forEach((event1)=>{
                    const newobj = Object.assign({},event);
                    newobj.start = event1;
                    newEvents.push(newobj);
                });
            }
        });
        newEvents.forEach((event)=>{
            this.events.push(event);
        });
        console.log(this.events);
    }

    private generatEventData(startDate: any, endDate:any){
        let event = [];
        while(startDate.getTime() <= endDate.getTime()){
            event.push(new Date(startDate.getTime()));
            startDate.setDate(startDate.getDate() + 1);
        }
        return event;
    }

    private createDaysForCurrentMonths(selectedPeriod: any) {
        this.calendaryData = [];
        const date = new Date(selectedPeriod.getFullYear(), selectedPeriod.getMonth(), 1, 0, 0, 0, 0); // Starting at the 1st of the month
        const extras = (date.getDay() + 6) % 7; // How many days of the last month do we need to include?
        date.setDate(date.getDate() - extras); // Skip back to the previous monday
        while (this.calendaryData.length < 6) {
          const rowDays = [];
          for (let i = 0; i < 7; i++) {
            const day: any = {
              date: null, selected: false, isActivePeriod: null, isDisabled: false, isActive : false, isEvent: false, eventDetails : null,
            };
            day.date = new Date(date.getTime());
            day.isActivePeriod = (date.getMonth() === selectedPeriod.getMonth()); 
            day.isActive = new AmexioDateUtils().isDateEqual(day.date, this.currrentDate);
            const eventDetails = this.hasEvent(day.date);
            if(eventDetails && eventDetails.isEvent){
                day.eventDetails = eventDetails;
                day.isEvent = eventDetails.isEvent;
            }
            rowDays.push(day);
            date.setDate(date.getDate() + 1);
          }
          this.calendaryData.push(rowDays);
        }       
      }
      
    hasEvent(date: any){
        //console.log(date);
        let flag = {isEvent:false, details:null, title: null, hasTimeSlot:false, eventDateTime: null};
        if(this.events && this.events.length>0){
            this.events.forEach((event:any)=>{
                let eventStartDate = new Date(event.start);                
                let isEvent = new AmexioDateUtils().isDateEqual(date,eventStartDate);
                if(isEvent){                   
                    flag.hasTimeSlot = event.hasTimeSlot;
                    flag.eventDateTime = date;
                    flag.isEvent = isEvent;
                    flag.details = event;
                    flag.title = event.title; 
                }
            });
        }
        return flag;
    }
}