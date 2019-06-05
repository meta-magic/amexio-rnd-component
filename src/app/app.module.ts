import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AmexioWidgetModule, AmexiotimelineComponent, DeviceQueryService, AmexioEnterpriseModule} from 'amexio-ng-extensions';

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
import { TextFieldComponent } from './component/textfield/bk/textfield.component';
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
import { AmexioCardCE } from './component/cards/amexio.cards.component';
import { AmexioCardCEHeader } from './component/cards/amexio.header.component';
import { AmexioCardCEBody } from './component/cards/amexio.body.component';
import { AmexioCardCEAction } from './component/cards/amexio.action.component';
import { AmexioBadgeComponent } from './component/badge/badge.component';
import { DemoComponent } from 'src/app/demo.component';
import { AmexioCalendarComponent1 } from './component/calendar/calendar.component';
import { AmexioCalendarMonthComponent1 } from './component/calendar/calendar.month';
import { AmexioCalendarDayTimeWiseComponent1 } from './component/calendar/calendar.daytimewise.component';
import { AmexioCalendarYearComponent1 } from './component/calendar/calendar.year.component';
import { DataService } from './component/service/dataservice';
import { AmexioInputPattern } from './directive/AmexioInputPattern';
import { AmexioTextInputComponent1 } from './component/textfield/textinput.component';

@NgModule({
  declarations: [
    AppComponent,
    // AmexioInputHelperComponent,
    // DropDownListComponent,
    // AmexioDropDownComponent1,
    // FilterPipe,
    // TextFieldComponent,
    // FormComponent,
    // AmexiotimelineComponent1,
    // AmexiotimelineeventComponent1,
    // FormGroupComponent,
    // AmexioCardCE,
    // AmexioCardCEBody,
    // AmexioCardCEHeader,
    // AmexioCardCEAction,
    // AmexioBadgeComponent,
    // DemoComponent,
    AmexioTextInputComponent1,
    TextFieldComponent,
    AmexioCalendarComponent1,
    AmexioCalendarMonthComponent1,
    AmexioCalendarDayTimeWiseComponent1,
    AmexioCalendarYearComponent1,
    AmexioInputPattern
  ],
  imports: [
    BrowserModule,
    AmexioWidgetModule,
    AmexioEnterpriseModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DeviceQueryService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
