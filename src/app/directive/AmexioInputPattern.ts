/*
* Copyright [2019] [Metamagic]
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
* Created by Ketan Gote on 05 June, 2019.
* Reference to : https://codepen.io/estelle/pen/LVQLRq?editors=1111
*
*/


import { Directive, HostListener, Input, Optional } from "@angular/core";
import { NgControl, NgModel } from "@angular/forms";

@Directive({
    selector: '[amexio-input-pattern]'
})
export class AmexioInputPattern {

    @Input('amexio-input-pattern') inputPattern: string;

    constructor(@Optional() public model: NgModel, public ngControl: NgControl) {

    }

    @HostListener('keyup', ['$event'])
    onModelChange(event) {
        let newVal = this.handleCurrentValue(event.target.value);
        this.model.update.emit(newVal);
    }

    handleCurrentValue(e: any) {
        let isCharsetPresent = this.ngControl.valueAccessor['data-charset'];
        let placeholder = isCharsetPresent || this.ngControl.valueAccessor['placeholder'];
        let value = e;
        let l = placeholder.length;
        let newValue = '', i, j, isInt, isLetter, strippedValue;

        // strip special characters
        strippedValue = isCharsetPresent ? value.replace(/\W/g, "") : value.replace(/\D/g, "");
        console.log(l + "  " + value + "  " + strippedValue);
        for (i = 0, j = 0; i < l; i++) {
            isInt = !isNaN(parseInt(strippedValue[j]));
            isLetter = strippedValue[j] ? strippedValue[j].match(/[A-Z]/i) : false;
            let matchesNumber = 'XdDmMyY9'.indexOf(placeholder[i]) >= 0;
            let matchesLetter = '_'.indexOf(placeholder[i]) >= 0;

            if ((matchesNumber && isInt) || (isCharsetPresent && matchesLetter && isLetter)) {
                newValue += strippedValue[j++];
            } else if ((!isCharsetPresent && !isInt && matchesNumber) || (isCharsetPresent && ((matchesLetter && !isLetter) || (matchesNumber && !isInt)))) {
                return newValue;
            } else {
                newValue += placeholder[i];
            }
            // break if no characters left and the pattern is non-special character
            if (strippedValue[j] == undefined) {
                break;
            }
        }
        if (this.ngControl.valueAccessor['data-valid-example']) {
            return this.validateProgress(e, newValue);
        }
        return newValue;
    }

    validateProgress(e: any, value) {
        var validExample = this.ngControl.valueAccessor['data-valid-example'],
            pattern = new RegExp(this.inputPattern),
            placeholder = this.ngControl.valueAccessor['data-placeholder'],
            l = value.length, testValue = '';

        //convert to months
        if (l == 1 && placeholder.toUpperCase().substr(0, 2) == 'MM') {
            if (value > 1 && value < 10) {
                value = '0' + value;
            }
            return value;
        }
        // test the value, removing the last character, until what you have is a submatch
        for (let i = l; i >= 0; i--) {
            testValue = value + validExample.substr(value.length);
            if (pattern.test(testValue)) {
                return value;
            } else {
                value = value.substr(0, value.length - 1);
            }
        }
        return value;
    }
}