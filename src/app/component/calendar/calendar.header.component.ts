import { Component, Input } from "@angular/core";


@Component({
    selector : 'amexio-calendar-header',
    templateUrl : './calendar.header.component.html'
})
export class AmexioCalendarHeaderComponent {

    @Input('currentstate') currentState : string;
 
    @Input('headers') headers : any[];

}