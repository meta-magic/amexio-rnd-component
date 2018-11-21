import { AmexiotimelineeventComponent1 } from './amexiotimelineeventnew.component';

export class AmexioTimeLineModel {
    timelineevents: AmexiotimelineeventComponent1[];

    contentalignment: string;

    alignment: string;

    constructor(timelineevents: AmexiotimelineeventComponent1[], contentalignment: string, alignment: string){
        this.timelineevents = timelineevents;
        this.alignment = alignment;
        this.contentalignment = contentalignment;
    }
  
}