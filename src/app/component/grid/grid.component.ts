import { OnInit, Component, Input, ContentChildren, QueryList, AfterContentInit } from "@angular/core";
import { of } from "rxjs";
import { GridColumnComponent } from "./grid.columns.component";

@Component({
    selector : 'grid',
    templateUrl : './grid.component.html'
})
export class GridComponent implements OnInit, AfterContentInit {

    _data : any;
    viewdata : any;
    globalfiltervalue : string;
    sortColumn : string;
    columns : GridColumnComponent[];
    

    @Input('title') title : string;

    @Input('data')
    set data(v:any){
        this._data = v;
        this.viewdata = of(this._data);
    }

    @Input('data-reader') datareader : string;

    @Input('global-filter') globalfilter: boolean;
    
    @ContentChildren(GridColumnComponent) columnDefinations : QueryList<GridColumnComponent>;


    constructor(){

    }

    ngOnInit(){

    }

    ngAfterContentInit(){
        this.columns = this.columnDefinations.toArray();
        this.columns.forEach(column =>{
            column.columnClicked.subscribe((event) => this.handleColumnClick(event));
        });
    }

    private handleColumnClick(column : GridColumnComponent){
        debugger;
        this.sort(column.dataindex);
    }

    private sort(col:string){
        this.sortColumn = col;
    }
}