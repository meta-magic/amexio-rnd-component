import { Input, Component, ContentChild, ViewChild, AfterViewInit, OnInit, ViewChildren, QueryList, forwardRef, AfterContentInit, ContentChildren } from "@angular/core";
import { ControlContainer, NgForm, NgModelGroup, NgModel, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector: 'form-group-component',
    templateUrl: './form.group.component.html',
    viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class FormGroupComponent implements OnInit, AfterViewInit, AfterContentInit {

    @Input('group') group : string;

    @ContentChildren(NgModel) public models: QueryList<NgModel>;

    modelsarray : NgModel[];

    @ContentChild(NgModelGroup)
    private _group: NgModelGroup;

    private _registered = false;
    
    ngOnInit() {

    }
    ngAfterViewInit() {
        //this.modelsarray = this.models.toArray();
        debugger;
    }

    ngAfterContentInit(){
        this.modelsarray = this.models.toArray();
        debugger;
    }

    ngAfterViewChecked() {
        if (!this._registered &&  this._group && this._group.control != null) {
            debugger;
            const ngContentModels = this.models.toArray();
            ngContentModels.forEach((model) => {
                console.log("-****-" + model.name);
                this._group.control.registerControl(model.name, model.control);
            });
            debugger;
            this._registered = true;
            // setTimeout(() => {
            //     this._group.control.updateValueAndValidity();
            // }, 200);

        }
    }

}