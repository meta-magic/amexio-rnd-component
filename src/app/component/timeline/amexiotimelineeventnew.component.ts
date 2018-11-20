import { Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList, ViewChild } from '@angular/core';

@Component({
  selector: 'amexio-timeline1-event',
  templateUrl: './amexiotimelineeventnew.component.html',
})
export class AmexiotimelineeventComponent1 {
  /*
Properties
name :label
datatype :string
version : 4.2onwards
default :
description : This will specify the label in timeline.
*/
  @Input('label') label: string;

  /*
Properties
name :icon
datatype :string
version : 4.2onwards
default :
description : This will specify the label in timeline.
*/
  @Input('icon') icon: string;
  /*
  Properties
  name :contentborder
  datatype :string
  version : 4.2onwards
  default : false
  description : This will specify the content border in timeline.
  */
  @Input('content-border') contentborder = true;


  @Input('content-alignment') contentalignment: string;

  constructor() {
    this.contentalignment = 'right';
  }

}
