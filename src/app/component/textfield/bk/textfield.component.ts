import { OnInit, Component, forwardRef, Input, ViewChild } from "@angular/core";
import { Validators, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgModel, FormControl } from "@angular/forms";
import { ValueAccessorBase } from "../../base/value-accessor";

@Component({
    selector: 'amexio-text-component',
    templateUrl: './textfield.component.html',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => TextFieldComponent),
        multi: true,
    }, {
        provide: NG_VALIDATORS, useExisting: forwardRef(() => TextFieldComponent), multi: true,

    }
    ]
})
export class TextFieldComponent extends ValueAccessorBase<string> implements Validators, OnInit {

    @Input('field-label') fieldlabel : string;

    @Input('name') name : string;

    @Input('required') required : boolean;

    @Input('placeholder') placeholder : string;

    @Input('data-valid-example') datavalidexample : string;
    

    @ViewChild(NgModel) model: NgModel;
    
    constructor() {
        super();
    }

    ngOnInit() {

    }

    public validate(c: FormControl) {
        console.log(this.fieldlabel + "  "+this.required);
        return (this.required && (this.value && this.value.length > 0)) ? null : {
            jsonParseError: {
                valid: true,
            },
        };
    }

}