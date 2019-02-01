import { AmexioCardBodyDemo } from './amexio.body.component';
import { Component, HostBinding, Input, OnInit, AfterContentInit , QueryList, ContentChildren } from '@angular/core';
import { AmexioCardHeaderDemo } from 'src/app/component/cards/amexio.header.component';
import { AmexioCardActionDemo } from 'src/app/component/cards/amexio.action.component';

@Component({
    selector : 'amexio-card-demo',
    templateUrl : './amexio.cards.component.html'
})
export class AmexioCardDemo implements OnInit , AfterContentInit {

   // @HostBinding('attr.class') cardclass = 'card-container-demo';

    @Input('bg-image') bgimage: string;

    @Input('color') color: string;

    @Input('bg-color') bgcolor: string;

    @Input('height') height: string;

    @Input('align') align: string;

    private cclass: string;

    @ContentChildren(AmexioCardHeaderDemo) amexioCardHeaderDemoQueryList: QueryList<AmexioCardHeaderDemo>;

    amexioCardHeaderList: AmexioCardHeaderDemo[];

    @ContentChildren(AmexioCardBodyDemo) amexioCardBodyDemoQueryList: QueryList<AmexioCardBodyDemo>;

    amexioCardBodyList: AmexioCardBodyDemo[];

    @ContentChildren(AmexioCardActionDemo) amexioCardActionDemoQueryList: QueryList<AmexioCardActionDemo>;

    amexioCardActionList: AmexioCardActionDemo[];

    constructor() {
    }

    ngOnInit() {
        if (!this.color) {
          this.cclass = 'card-container-demo-color';
        }
        if (!this.bgcolor) {
          this.cclass = this.cclass + ' card-container-demo-bg-color';
        }
    }

    ngAfterContentInit() {
      this.setCardAligementForAllInnerComponent();
    }

    // TO SET ALIGN TO ALL INNER COMPONENT IN CARD
    setCardAligementForAllInnerComponent() {
      this.amexioCardHeaderList = this.amexioCardHeaderDemoQueryList.toArray();
      if (this.amexioCardHeaderList[0] !== undefined && !this.amexioCardHeaderList[0].align &&
        this.amexioCardHeaderList[0].align.length > 0) {
        this.amexioCardHeaderList[0].align = this.align;
      } else if (this.amexioCardHeaderList[0] !== undefined ) {
        this.amexioCardHeaderList[0].align = 'start';
      }

      this.amexioCardBodyList = this.amexioCardBodyDemoQueryList.toArray();
      if (this.amexioCardBodyList[0]  !== undefined && !this.amexioCardBodyList[0].align && this.amexioCardBodyList[0].align.length > 0) {
        this.amexioCardBodyList[0].align = this.align;
      } else if (this.amexioCardBodyList[0]  !== undefined) {
        this.amexioCardBodyList[0].align = 'start';
      }

      this.amexioCardActionList = this.amexioCardActionDemoQueryList.toArray();
      if (this.amexioCardActionList[0]  !== undefined && !this.amexioCardActionList[0].align &&
         this.amexioCardActionList[0].align.length > 0) {
        this.amexioCardActionList[0].align = this.align;
      } else if(this.amexioCardActionList[0]  !== undefined) {
        this.amexioCardActionList[0].align = 'right';
      }
    }
}
