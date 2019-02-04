import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector : 'amexio-body-ce',
    templateUrl : './amexio.body.component.html'
})
export class AmexioCardCEBody {

    @HostBinding('attr.class') cardclass = 'card-container-body';

    @Input('align') align = '';

    // tslint:disable-next-line:no-input-rename
    @Input('bg-image') bgimage: string ;

    @Input('color') color: string;

    @Input('bg-color') bgcolor: string;

    @Input('height') height: string;
}
