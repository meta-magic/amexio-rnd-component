import { OnInit, Component, ContentChildren, QueryList, AfterContentChecked, AfterContentInit, AfterViewInit, ViewChild } from "@angular/core";
import { NgModel, NgForm, FormBuilder, ControlContainer } from "@angular/forms";
import { FormGroupComponent } from "./form.group.component";

@Component({
    selector: 'form-component',
    templateUrl: "./form.component.html",
    viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class FormComponent implements OnInit, AfterViewInit {

    @ViewChild(NgForm) public form: NgForm;

    @ContentChildren(NgModel) public models: QueryList<NgModel>;

    @ContentChildren(FormGroupComponent) public fb: QueryList<FormGroupComponent>;

    private _registered = false;

    constructor(public formBuilder: FormBuilder){

    }
    ngOnInit() {

    }

    ngAfterViewInit() {
        const ngContentModels = this.models.toArray();
        ngContentModels.forEach((model) => {
            this.form.control.registerControl(model.name, model.control);
        });
        const fbs = this.fb.toArray();
        const fbgc = fbs[0];
        const model = fbgc.modelsarray[0];
        
        const fgc = {};
        fgc[model.name]= model.control;
        const grp = this.formBuilder.group(fgc);
        //this.form.controls['inner'] = grp;
        this.form.form.registerControl('inner',grp);
        debugger;
    }
 

    public valid(): boolean {
        debugger;
        return this.form.form.valid;
    }


}