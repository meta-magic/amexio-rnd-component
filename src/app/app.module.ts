import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AmexioWidgetModule, AmexiotimelineComponent, DeviceQueryService} from 'amexio-ng-extensions';

import { AppComponent } from './app.component';
import { AmexioTypeAheadComponent } from './component/typeahead/typeahead.component';
import { FilterAndSortPipe } from './component/pipe/filterandsort.pipe';
import { FilterPipe } from './component/pipe/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropDownListComponent } from './component/base/dropdownlist.component';
import { AmexioInputHelperComponent } from './component/base/input.helper.component';
import { AmexioLayout } from './component/layout/layout.component';
import { AmexioLayoutItem } from './component/layout/layoutitem.component';
import { RadioGroupComponent } from './component/radio/radiogroup.component';
import { TextFieldComponent } from './component/textfield/textfield.component';
import { FormComponent } from './component/form/form.component';
import { CustomComponentvaldiation } from './component/base/required.directive';
import { CheckGroupComponent } from './component/checkgroup/checkgroup.component';
import { CheckboxComponent } from './component/checkgroup/checkbox.component';
import { GridComponent } from './component/grid/grid.component';
import { GridColumnComponent } from './component/grid/grid.columns.component';
import { GridRowComponent } from './component/grid/grid.row.component';
import { AmexiotimelineeventComponent1 } from './component/timeline/amexiotimelineeventnew.component';
import { AmexiotimelineComponent1 } from './component/timeline/amexiotimelinenew.component';
import { FormGroupComponent } from './component/form/form.group.component';
import { AmexioDropDownComponent1 } from './component/dropdown/dropdown.component';
import { AmexioCardDemo } from './component/cards/amexio.cards.component';
import { AmexioCardHeaderDemo } from './component/cards/amexio.header.component';
import { AmexioCardBodyDemo } from './component/cards/amexio.body.component';
import { AmexioCardActionDemo } from './component/cards/amexio.action.component';
import { AmexioBadgeComponent } from './component/badge/badge.component';

@NgModule({
  declarations: [
    AppComponent,
    AmexioInputHelperComponent,
    DropDownListComponent,
    AmexioDropDownComponent1,
    FilterPipe,
    TextFieldComponent,
    FormComponent,
    AmexiotimelineComponent1,
    AmexiotimelineeventComponent1,
    FormGroupComponent,
    AmexioCardDemo,
    AmexioCardBodyDemo,
    AmexioCardHeaderDemo,
    AmexioCardActionDemo,
    AmexioBadgeComponent
  ],
  imports: [
    BrowserModule,
    AmexioWidgetModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DeviceQueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
