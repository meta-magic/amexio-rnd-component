import { AfterContentInit, Component, ContentChildren, EventEmitter, OnInit, Output, QueryList, ViewChild, Input } from '@angular/core';
import { AmexiotimelineeventComponent1 } from './amexiotimelineeventnew.component';
import { DeviceQueryService } from 'amexio-ng-extensions';

@Component({
  selector: 'amexio-timeline1',
  templateUrl: './amexiotimelinenew.component.html'
})
export class AmexiotimelineComponent1 implements OnInit, AfterContentInit {

  @ContentChildren(AmexiotimelineeventComponent1) querylist: QueryList<AmexiotimelineeventComponent1>;

  @Input('content-alignment') contentalignment: string;

  alignment: string = 'center';

  timelineevents: AmexiotimelineeventComponent1[];

  timelineModel: AmexioTimeLineModel;

  constructor(public matchMediaService: DeviceQueryService) {
    const that = this;

    this.matchMediaService.OnPhone((mediaQueryList: MediaQueryList) => {
      that.mobileOrTabletMode();
    });

    this.matchMediaService.OnTablet((mediaQueryList: MediaQueryList) => {
      that.mobileOrTabletMode();
    });

    this.matchMediaService.OnDesktop((mediaQueryList: MediaQueryList) => {
      that.desktopMode();
    });
  }
  ngOnInit() {

  }

  ngAfterContentInit() {
    this.timelineevents = this.querylist.toArray();
    this.initContentAlignment();
  }

  private initContentAlignment() {
    debugger;
    if (this.contentalignment)
      this.alignment = this.contentalignment;

    let hasContentAlignment: boolean = true;
    this.timelineevents.forEach((timeline: AmexiotimelineeventComponent1) => {
      debugger;
      if (timeline.contentalignment) {
        hasContentAlignment = false;
      }
    });

    if (hasContentAlignment) {
      this.timelineevents.forEach((timeline: AmexiotimelineeventComponent1, index) => {
        if (this.contentalignment) {
          timeline.contentalignment = this.contentalignment;
        } else {
          timeline.contentalignment = ((index % 2) == 0) ? 'right' : 'left';
        }
        timeline.alignment = this.alignment;
      });
    }

    this.timelineModel = new AmexioTimeLineModel(JSON.parse(JSON.stringify(this.timelineevents)), this.contentalignment, this.alignment);

  }

  private mobileOrTabletMode() {
    this.alignment = 'right';
    this.timelineevents.forEach((timeline: AmexiotimelineeventComponent1, index) => {
      timeline.contentalignment = 'right';
      timeline.alignment = this.alignment;
    });
  }

  private desktopMode() {

    this.alignment = this.timelineModel.alignment;
    this.contentalignment = this.timelineModel.contentalignment
    let hasContentAlignment: boolean = true;
    this.timelineevents.forEach((timeline: AmexiotimelineeventComponent1, index) => {
      const originalTimelineEvent1: AmexiotimelineeventComponent1 = this.timelineModel.timelineevents[index];
      timeline.contentalignment = originalTimelineEvent1.contentalignment;
      timeline.alignment = originalTimelineEvent1.alignment;
    });
  }


}



class AmexioTimeLineModel {
  timelineevents: AmexiotimelineeventComponent1[];

  contentalignment: string;

  alignment: string;

  constructor(timelineevents: AmexiotimelineeventComponent1[], contentalignment: string, alignment: string) {
    this.timelineevents = timelineevents;
    this.alignment = alignment;
    this.contentalignment = contentalignment;
  }

}