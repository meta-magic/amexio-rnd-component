import { AfterContentInit, Component, ContentChildren, EventEmitter, OnInit, Output, QueryList, ViewChild  } from '@angular/core';

@Component({
  selector: 'amexio-timeline1',
  templateUrl: './amexiotimelinenew.component.html',
  host :{
    class : 'timeline'
  }
})
export class AmexiotimelineComponent1 implements OnInit, AfterContentInit {

ngOnInit() {
  }
  ngAfterContentInit() {
 }
}
