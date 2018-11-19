import { OnInit, Component, Input } from "@angular/core";

@Component({
    selector : 'row',
    templateUrl : './grid.row.component.html'
})
export class GridRowComponent implements OnInit{

    @Input('data') data : any[];

    @Input('column-definition') columns : any[];
    
    ngOnInit(){

    }
}