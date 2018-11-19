import { OnInit, Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector : 'column',
    templateUrl : './grid.columns.component.html',
    host:{
        class : 'datatable-col'
    }
})
export class GridColumnComponent implements OnInit {

    @Input('title') title: string;

    @Input('data-index') dataindex: string;

    @Input('data-type') datatype: string;

    @Output('columnClicked') columnClicked = new EventEmitter<any>();

    constructor(){

    }
    
    ngOnInit(){

    }

    sort(){
        this.columnClicked.emit(this);
    }
}