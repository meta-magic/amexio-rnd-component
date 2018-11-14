import { OnInit, Component, Input, HostBinding } from "@angular/core";
import { LayoutConstant } from "./layout.constant";


@Component({
    selector : 'amexio-layout',
    templateUrl: './layout.component.html',
    styles: [`
    :host {
        display: flex;
    }
  `]
})
export class AmexioLayout implements OnInit{

    private _type : string;
    private _alignment : string;
    private _padding : number;

    @Input('type') type : string;

    @Input('alignment') alignment : string;

    @Input('border') border : boolean = true;
    
    @Input('fit') fit : boolean = true;

    @HostBinding('style.flex-direction') public typeDirection: string;

    @HostBinding('style.justify-content') public justifyContent: string;

    @HostBinding('style.border') public borderstyle: string;

    @HostBinding('style.box-shadow') public borderboxstyle: string;

    @HostBinding('style.height') public height: string;

    ngOnInit(){
        this.setLayoutDefination();
    }

    public setLayoutDefination(){
        this.setType();
        this.setAlignment();
        this.setBorder();
        this.setFit();
    }

    private setType(){
        if(this.type && this.type.toLowerCase() === "vertical")
            this.typeDirection = "column";
        else 
            this.typeDirection = "row";
    }

    private setAlignment(){
        if(this.alignment && LayoutConstant[this.alignment.toLowerCase()]){
            this.justifyContent = LayoutConstant[this.alignment.toLowerCase()];
        }else{
            this.justifyContent = 'start';
        }
    }

    private setBorder(){
        if(this.border){
            this.borderstyle = "1px solid #ced4da"
            this.borderboxstyle = "0 2px 2px 0 rgba(0,0,0,.14)"
        }
    }

    private setFit(){
        if(this.fit){
            this.height = "100%";
        }
    }
}