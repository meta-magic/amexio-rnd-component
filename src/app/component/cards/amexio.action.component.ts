import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
    selector : 'amexio-action-ce',
    templateUrl : './amexio.action.component.html'
})
export class AmexioCardCEAction implements OnInit {

    @Input('align') align = '';

    @Input('bg-image') bgimage : string ;

    @Input('color') color: string;

    @Input('bg-color') bgcolor : string;

    @Input('height') height: string;

    @Input('border-top') bordertop: boolean;

    @Input('direction') direction = 'row';

    cclass = '';

    ngOnInit() {
      if (this.bordertop) {
        this.cclass = 'card-action-border';
      }
    }
}
