import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { GridColumnComponent } from '../grid/grid.columns.component';

@Pipe({
    name: 'filterandsort',
})
@Injectable()
export class FilterAndSortPipe implements PipeTransform {

  transform(data: any[], columns: GridColumnComponent[], globalfiltervalue: string, sortcolumn: string): any[] 
  {
    debugger;
    if((globalfiltervalue && globalfiltervalue.length>0) && (sortcolumn && sortcolumn.length>0)){
      return this.sort(this.filter(data, columns,globalfiltervalue),sortcolumn);
    }else if ((globalfiltervalue && globalfiltervalue.length>0)){
      return this.filter(data,columns,globalfiltervalue);
    }else if((sortcolumn && sortcolumn.length>0)){
      return this.sort(data,sortcolumn);
    }else{
      return data;
    }
  }

  private filter(data: any[], columns: GridColumnComponent[], value: string): any[] {
    
    if (!data) {
        return [];
    }
    else if (!columns) {
        return data;
    }

    return data.filter(row => {
      let hasdata : boolean;
      if(value){
        columns.forEach(column =>{
          if(!hasdata){
              hasdata = this.checkColumnValue(row,column, value);
          }          
        });
      }else{
        return true;
      }
      
      return hasdata;
    });
  }

  private  checkColumnValue(row:any, column: GridColumnComponent, value: string) : boolean{
    return (row[column.dataindex]+"").toLowerCase().includes((value+"").toLowerCase());
  }

  private sort(items: any[],field: string): any {
        
         if(field && items ){
            return items.sort((a, b) => {
            const x = a[field].toLowerCase();
            const y = b[field].toLowerCase();
            return this.sortOrder(1, x, y);
          });
        }

    }

  private sortOrder(sortOrder: any, x: any, y: any) {
    debugger;
        if (sortOrder === 2) {
          if (x < y) {
            return 1;
          }
          if (x > y) {
            return -1;
          }
        } else {
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
        }
      }
}