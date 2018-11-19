import { OnInit, Component, ContentChildren, QueryList, AfterContentChecked, AfterContentInit, AfterViewInit, ViewChild } from "@angular/core";
import { NgModel, NgForm } from "@angular/forms";

@Component({
    selector: 'form-component',
    templateUrl: "./form.component.html"
})
export class FormComponent implements OnInit, AfterViewInit {

    @ViewChild(NgForm) public form: NgForm;
    
    @ContentChildren(NgModel, { descendants: true }) public models: QueryList<NgModel>;

    ngOnInit() {

    }

    ngAfterViewInit() {
        const ngContentModels = this.models.toArray();
        ngContentModels.forEach((model) => {
            this.form.addControl(model);
        });
    }

    public valid() : boolean {
        debugger;
        return this.form.form.valid;
    }

   
}