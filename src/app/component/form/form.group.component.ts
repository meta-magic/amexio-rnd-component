import { Input, Component, ContentChild, ViewChild, AfterViewInit, OnInit, ViewChildren, QueryList, forwardRef } from "@angular/core";
import { ControlContainer, NgForm, NgModelGroup, NgModel, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector: 'form-group-component',
    templateUrl: './form.group.component.html',
    providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => FormGroupComponent),
          multi: true
        }
      ]
})
export class FormGroupComponent implements OnInit, AfterViewInit {

    @ViewChildren(NgModel) public models: QueryList<NgModel>;

    @ContentChild(NgModelGroup)
    private _group: NgModelGroup;

    private _registered = false;
    
    ngOnInit() {

    }
    ngAfterViewInit() {
        
    }

    ngAfterViewChecked() {
        if (!this._registered && this._group.control != null) {
            debugger;
            const ngContentModels = this.models.toArray();
            ngContentModels.forEach((model) => {
                console.log("-****-" + model.name);
                this._group.control.registerControl(model.name, model.control);
            });
            debugger;
            this._registered = true;
            setTimeout(() => {
                this._group.control.updateValueAndValidity();
            }, 200);

        }
    }

}