import { Component, HostBinding, Input } from "@angular/core";

@Component({
    selector : 'amexio-header-demo',
    templateUrl : './amexio.header.component.html'
})
export class AmexioCardHeaderDemo {

    @Input('align') align = 'start'; // Possible values: All values which justify-content takes.

    @Input('bg-image') bgimage : string ;
    
}