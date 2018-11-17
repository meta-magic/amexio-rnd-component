import { Component, Input, forwardRef, ChangeDetectorRef } from "@angular/core";
import { ValueAccessorBase } from "../base/value-accessor";
import { of } from 'rxjs';
import { NG_VALUE_ACCESSOR, Validators, FormControl, NG_VALIDATORS } from "@angular/forms";
@Component({
    selector: 'amexio-radio-group-1',
    templateUrl: './radiogroup.component.html',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => RadioGroupComponent),
        multi: true,
    }, {
        provide: NG_VALIDATORS, useExisting: forwardRef(() => RadioGroupComponent), multi: true,

    }
    ]
})
export class RadioGroupComponent extends ValueAccessorBase<string> implements Validators {

    private _data: any;
    private viewdata: any;
    public checked: boolean;

    @Input('data')
    set data(v: any) {
        this._data = v;
        this.viewdata = of(this._data);
    }
    get data(): any {
        return this._data;
    }

    @Input('display-field') displayfield: string;

    @Input('value-field') valuefield: string;

    @Input('field-label') fieldlabel: string;

    @Input('name') name: string;

    @Input('required') required = true;

    constructor(private cd: ChangeDetectorRef) {
        super();
    }
    onClick(data: any) {
        if (data[this.valuefield]) {
            this.value = data[this.valuefield];
        }
    }

    public validate(c: FormControl) {
        console.log(this.value);
        return (this.required && (this.value && this.value.length > 0)) ? null : {
            jsonParseError: {
                valid: true,
            },
        };
    }


}