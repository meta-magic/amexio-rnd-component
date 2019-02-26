import { Component, Input, ViewChild, ElementRef, OnInit } from "@angular/core";


@Component({
    selector : 'amexio-calendar-day-timewise',
    templateUrl : './calendar.daytimewise.component.html'
})
export class AmexioCalendarDayTimeWise implements OnInit{

    @Input('headers') headers : any[];

    @Input('calendar-data') calendaryData : any[];
 
    @ViewChild('headerRow') headerRow: ElementRef;

    width : number;

    constructor(){
        
    }

    ngOnInit(){
        debugger;
        this. width = (this.headerRow.nativeElement.offsetWidth-50)/7;
        if((this.width-50)>50){
            this.width = this.width - 50;
        }
    }
    
}