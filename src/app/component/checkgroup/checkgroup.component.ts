import { OnInit, Component, forwardRef, Input } from "@angular/core";
import { ValueAccessorBase } from "../base/value-accessor";
import { NG_VALUE_ACCESSOR, Validators, FormControl, NG_VALIDATORS } from "@angular/forms";
import { of } from "rxjs";

@Component({
    selector : 'check-group',
    templateUrl : './checkgroup.component.html',
    providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => CheckGroupComponent),
          multi: true
        }, {
            provide: NG_VALIDATORS, useExisting: forwardRef(() => CheckGroupComponent), multi: true,

        }
    ]
})
export class CheckGroupComponent extends ValueAccessorBase<any> implements OnInit,  Validators{

    viewdata : any;
    _data : any;

    @Input('data')
    set data(v:any){
        this._data = v;
        this.viewdata = of(this.data);
    }

    get data(){
        return this._data;
    }

    @Input('field-label') fieldlabel : any;

    @Input('display-field') displayfield : any;

    @Input('value-field') valuefield : any;

    @Input('required') required : true;

    @Input('name') name : string;

    private _model: any;

    constructor(){
        super();
    }

    ngOnInit(){

    }

    addOrRemove(value: any) {
        if (this.contains(value)) {
            this.remove(value);
        } else {
            this.add(value);
        }
    }

    contains(value: any): boolean {

        if (this._model instanceof Array) {
            return this._model.indexOf(value) > -1;
        } else if (!!this._model) {
            return this._model === value;
        }

        return false;
    }

    private add(value: any) {
        if (!this.contains(value)) {
            if (this._model instanceof Array) {
                this._model.push(value);
            } else {
                this._model = [value];
            }
            this.onChangeCallback(this._model);
        }
    }

    private remove(value: any) {
        const index = this._model.indexOf(value);
        if (!this._model || index < 0) {
            return;
        }

        this._model.splice(index, 1);
        this.onChangeCallback(this._model);
    }

    public validate(c: FormControl) {
        return (this.required && (this._model && this._model.length > 0)) ? null : {
            jsonParseError: {
                valid: true,
            },
        };
    }


}
