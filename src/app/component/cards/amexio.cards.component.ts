import { Component, HostBinding, Input } from "@angular/core";

@Component({
    selector : 'amexio-card-demo',
    templateUrl : './amexio.cards.component.html'
})
export class AmexioCardDemo {

    @HostBinding('attr.class') cardclass = 'card-container-demo';

    @Input('bg-image') bgimage : string;
}