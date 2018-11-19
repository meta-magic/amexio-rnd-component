import { Validator, FormControl, NG_VALIDATORS } from "@angular/forms";
import { Component, forwardRef, Directive } from "@angular/core";

@Directive({
    selector: '[required]',
    providers: [{
        provide: NG_VALIDATORS, useExisting: forwardRef(() => CustomComponentvaldiation), multi: true,

    }
    ]
})
export class CustomComponentvaldiation implements Validator{

    public validate(c: FormControl) {
        debugger;
        if(!c.value){
            return {
                required : 'This field is compulsory'
            }
        }
        return null;
    }
}