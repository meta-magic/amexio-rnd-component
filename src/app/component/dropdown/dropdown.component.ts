import { ListBaseComponent } from "../base/list.base.component";
import { AfterViewInit, Component, Renderer2, ElementRef, ChangeDetectorRef, Input, ViewChild, ViewChildren, QueryList, ContentChild, TemplateRef } from "@angular/core";
import { NgModel } from "@angular/forms";
import { DropDownListComponent } from "../base/dropdownlist.component";
import { of } from 'rxjs';

@Component({
    selector : 'amexio-dropdown1',
    templateUrl : './dropdown.component.html'
})
export class AmexioDropDownComponent1 extends ListBaseComponent<string> implements AfterViewInit{
    
   
    private _fieldlabel : string;
    private _haslabel   : boolean;
    private _data       : any;
    private _key           : any;
    private viewdata   : any;
    private displayValue : string = "";

    @Input('field-label')
    set fieldlabel(v:string){
        if(v !=null && v.length>0){
            this._fieldlabel = v;
            this.initComponent();
        }
    }
    get fieldlabel(){
        return this._fieldlabel;
    }

    @Input('has-label')
    set haslabel(v:boolean){
        this._haslabel = v;
    }
    get haslabel() : boolean{
        return this._haslabel;
    }

    @Input('data')
    set data(v:any){
        this._data = v;
        this.viewdata  = of(this._data);
    }
    get data() : any{
        return this._data;
    }

    @Input('key')
    set key(v:any){
        this._key = v;
        this.displayfield = this._key;
    }
    get key() : any{
        return this._key;
    }

    @Input('display-field') displayfield : string;

    @Input('value-field') valuefield : string;

    @Input('data-reader') datareader : string;

    @Input('http-url') httpurl : string;

    @Input('http-method') httpmethod : string;

    @Input('place-holder') placeholder : string = "";

    @Input('allow-blank') allowblank : boolean;

    @Input('error-msg') errormsg: string;   
    
    @Input('icon-feedback') iconfeedback : boolean;

    @Input('enable-popover') enablepopover : boolean;

    @Input('font-style') fontstyle: string;

    @Input('font-family') fontfamily: string;

    @Input('font-size') fontsize: string;    

    @Input('trigger-char') triggerchartcount: number;    

    @ViewChild(NgModel) model: NgModel;

    rowindex : number = 0;

    @ViewChildren(DropDownListComponent)
    private dropdownlist: QueryList<DropDownListComponent>;

    dropdown: DropDownListComponent[];

    @ContentChild('amexioBodyTmpl') bodyTemplate: TemplateRef<any>;
   
    optionsShown : boolean;

    constructor(renderer: Renderer2, element: ElementRef,cd: ChangeDetectorRef){
        super(renderer, element,cd);
    }

    ngAfterViewInit(){

        this.dropdown = this.dropdownlist.toArray();
        setTimeout(() => {
            this.dropdown.map(dropdown => {
                dropdown.template = this.bodyTemplate;
            });
        }, 200);
    }
    
    initComponent(){
        if(this.fieldlabel !=null && this.fieldlabel.length>0){
            this.haslabel = true;
        }
    }

    input(event:any){
        this.displayValue = event.target.value;
        this.rowindex = 0;
        if(this.displayValue.length>=0 && !this.self){
            this.focus(event);
        }
    }

    keyup(event: any){
        
        const keycode : number = event.keyCode;

        if( keycode === 40){
            this.rowindex++;
        }else if(keycode === 38){
            this.rowindex--;
        }else if(keycode === 40 || keycode === 38){
            this.rowindex = 0;
            
        } 
        
        if(this.rowindex<0){
            this.rowindex = 0;
        }else if(this.rowindex >= this.viewdata.value.length){
            this.rowindex = this.viewdata.value.length-1;
        }

        if(keycode === 13){
            const data = this.dropdown[0].selectedItem();
            this.value = data[0].attributes['valuefield'].value;
            this.displayValue = data[0].attributes['displayfield'].value;
            this.itemClicked();
        }else if(keycode === 40 || keycode === 38){
            this.dropdown[0].scroll(this.rowindex);
        } 

        
    }

    blur(event : any){
        super.blur(event);
        const userinput : string = event.target.value;
        const listitems : any[] = this.viewdata.value;
        listitems.forEach((item) =>{
            if((item[this.displayfield]+"").toLowerCase() === userinput.toLowerCase()){
                this.displayValue = item[this.displayfield];
                this.value = item[this.valuefield];
            }
        });

    }

    onDropDownListItemClick(data:any){
        this.value = data[this.valuefield];
        this.displayValue = data[this.displayfield];
    }
    
    
    writeValue(v:any){
        super.writeValue(v);
        if(v && this.viewdata){
            this.showValue();
        }
    }

    private showValue(){
        const listitems : any[] = this.viewdata.value;
        listitems.forEach((item) =>{
            if(item[this.valuefield] === this.value){
                this.displayValue = item[this.displayfield];
            }
        });
    }

    showOptions(event : any){
        if(!this.optionsShown)
            super.focus(event);
        else
            super.blur(event);
        
        this.optionsShown = !this.optionsShown;
    }


}