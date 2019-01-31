import { Component, HostBinding, Input, OnInit } from "@angular/core";

@Component({
    selector : 'amexio-card-demo',
    templateUrl : './amexio.cards.component.html'
})
export class AmexioCardDemo implements OnInit{

   // @HostBinding('attr.class') cardclass = 'card-container-demo';

    @Input('bg-image') bgimage : string;

    @Input('color') color : string;

    @Input('bg-color') bgcolor : string;
    
    private cclass : string;

    constructor(){

    }

    ngOnInit(){
        if(!this.color)
            this.cclass = "card-container-demo-color";
        if(!this.bgcolor)
            this.cclass = this.cclass + "card-container-demo-bg-color";
    }
}