import { AfterContentInit, Component, ContentChildren, EventEmitter, OnInit, Output, QueryList, ViewChild, Input } from '@angular/core';
import { AmexiotimelineeventComponent1 } from './amexiotimelineeventnew.component';

@Component({
  selector: 'amexio-timeline1',
  templateUrl: './amexiotimelinenew.component.html'
})
export class AmexiotimelineComponent1 implements OnInit, AfterContentInit {

  @ContentChildren(AmexiotimelineeventComponent1) querylist : QueryList<AmexiotimelineeventComponent1>;

  @Input('content-alignment') contentalignment: string;
  
  alignment : string = 'center';

  timelineevents : AmexiotimelineeventComponent1[];
  
  ngOnInit() {

  }

  ngAfterContentInit() {
    this.timelineevents = this.querylist.toArray();
    this.validateContentAlignment();
  }

  private validateContentAlignment(){
    debugger;
    if(this.contentalignment)
      this.alignment = this.contentalignment;

    let hasContentAlignment : boolean = true;
    this.timelineevents.forEach((timeline: AmexiotimelineeventComponent1) => {
      debugger;
      if(timeline.contentalignment){
        hasContentAlignment = false;
      }
    });

    if(hasContentAlignment){
      this.timelineevents.forEach((timeline: AmexiotimelineeventComponent1, index) => {
        if(this.contentalignment){
          timeline.contentalignment = this.contentalignment;
        }else{
          timeline.contentalignment = ((index%2)==0) ? 'right':'left';
        }
        timeline.alignment = this.alignment;
      });
    }
  }
}
