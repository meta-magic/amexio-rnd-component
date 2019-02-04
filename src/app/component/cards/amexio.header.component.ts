import { Component, HostBinding, Input, OnInit } from "@angular/core";

@Component({
    selector : 'amexio-header-ce',
    templateUrl : './amexio.header.component.html'
})
export class AmexioCardHeaderDemo implements OnInit {

    @Input('align') align = ''; // Possible values: All values which justify-content takes.

    @Input('bg-image') bgimage : string ;

    @Input('color') color: string;

    @Input('bg-color') bgcolor: string;

    @Input('height') height: string;

    @Input('border-bottom') borderbottom: boolean;

    @Input('direction') direction: string = "row";

    cclass = '';

    ngOnInit() {
      if (this.borderbottom) {
        this.cclass = 'card-header-border';
      }
    }
}
