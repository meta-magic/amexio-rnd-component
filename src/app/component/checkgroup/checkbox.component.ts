import { Component, Input, Host } from "@angular/core";
import { CheckGroupComponent } from "./checkgroup.component";

@Component({
    selector: 'checkbox',
    templateUrl :'./checkbox.component.html'
})
export class CheckboxComponent {
    
    @Input() label: any;

    @Input() value: any;

    @Input() name: any;

    constructor(@Host() private checkboxGroup: CheckGroupComponent) {
    }

    toggleCheck() {
        this.checkboxGroup.addOrRemove(this.value);
    }

    isChecked() {
        return this.checkboxGroup.contains(this.value);
    }
}
