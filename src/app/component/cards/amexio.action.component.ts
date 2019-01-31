import { Component, HostBinding, Input } from "@angular/core";

@Component({
    selector : 'amexio-action-demo',
    templateUrl : './amexio.action.component.html'
})
export class AmexioCardActionDemo {

    @Input('align') align = 'right';
    
}