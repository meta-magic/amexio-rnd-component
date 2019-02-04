import { AmexioCardCEBody } from './amexio.body.component';
import { Component, HostBinding, Input, OnInit, AfterContentInit , QueryList, ContentChildren } from '@angular/core';
import { AmexioCardCEHeader } from 'src/app/component/cards/amexio.header.component';
import { AmexioCardCEAction } from 'src/app/component/cards/amexio.action.component';

@Component({
    selector : 'amexio-card-ce',
    templateUrl : './amexio.cards.component.html'
})
export class AmexioCardCE implements OnInit , AfterContentInit {

    @Input('bg-image') bgimage: string;

    @Input('color') color: string;

    @Input('bg-color') bgcolor: string;

    @Input('height') height: string;

    @Input('align') align: string;

    @Input('style-type') styleType: string;

    private cclass: string;

    @ContentChildren(AmexioCardCEHeader) AmexioCardCEHeaderQueryList: QueryList<AmexioCardCEHeader>;

    amexioCardHeaderList: AmexioCardCEHeader[];

    @ContentChildren(AmexioCardCEBody) AmexioCardCEBodyQueryList: QueryList<AmexioCardCEBody>;

    amexioCardBodyList: AmexioCardCEBody[];

    @ContentChildren(AmexioCardCEAction) AmexioCardCEActionQueryList: QueryList<AmexioCardCEAction>;

    amexioCardActionList: AmexioCardCEAction[];

    constructor() {
    }

    ngOnInit() {
        if (!this.color) {
          this.cclass = 'card-container-ce-color';
        }
        if (!this.bgcolor) {
          this.cclass = this.cclass + ' card-container-ce-bg-color';
        }
        if (this.styleType && this.styleType === 'wider') {
          this.cclass = this.cclass + ' card-container-wider';
        }
        if (this.styleType && this.styleType === 'narrower') {
          this.cclass = this.cclass + ' card-container-narrower';
        }
    }

    ngAfterContentInit() {
      this.setCardAligementForAllInnerComponent();
    }

    // TO SET ALIGN TO ALL INNER COMPONENT IN CARD
    setCardAligementForAllInnerComponent() {
      this.amexioCardHeaderList = this.AmexioCardCEHeaderQueryList.toArray();
      if (this.amexioCardHeaderList[0] !== undefined && !this.amexioCardHeaderList[0].align &&
        this.amexioCardHeaderList[0].align.length > 0) {
        this.amexioCardHeaderList[0].align = this.align;
      }

      this.amexioCardBodyList = this.AmexioCardCEBodyQueryList.toArray();
      if (this.amexioCardBodyList[0]  !== undefined && !this.amexioCardBodyList[0].align && this.amexioCardBodyList[0].align.length > 0) {
        this.amexioCardBodyList[0].align = this.align;
      }

      this.amexioCardActionList = this.AmexioCardCEActionQueryList.toArray();
      if (this.amexioCardActionList[0]  !== undefined && !this.amexioCardActionList[0].align &&
         this.amexioCardActionList[0].align.length > 0) {
        this.amexioCardActionList[0].align = this.align;
      } else if (this.amexioCardActionList[0] !== undefined &&
        this.amexioCardActionList[0].align === '') {
        this.amexioCardActionList[0].align = 'end';
      }

    }
}
