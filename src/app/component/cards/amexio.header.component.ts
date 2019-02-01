import { Component, HostBinding, Input, OnInit } from "@angular/core";

@Component({
    selector : 'amexio-header-demo',
    templateUrl : './amexio.header.component.html'
})
export class AmexioCardHeaderDemo implements OnInit {

    @Input('align') align = 'start'; // Possible values: All values which justify-content takes.

    @Input('bg-image') bgimage : string ;

    @Input('color') color: string;

    @Input('bg-color') bgcolor: string;

    @Input('height') height: string;

    @Input('border-bottom') borderbottom: boolean;

    cclass = '';

    ngOnInit() {
      if (this.borderbottom) {
        this.cclass = 'card-header-border';
      }
    }
}
