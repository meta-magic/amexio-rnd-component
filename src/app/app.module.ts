import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AmexioWidgetModule} from 'amexio-ng-extensions';

import { AppComponent } from './app.component';
import { AmexioTypeAheadComponent } from './component/typeahead/typeahead.component';
import { FilterAndSortPipe } from './component/pipe/filterandsort.pipe';
import { FilterPipe } from './component/pipe/filter.pipe';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    RadioGroupComponent,
    DropDownListComponent,
    AmexioInputHelperComponent,
    AmexioTypeAheadComponent,
    FilterAndSortPipe,
    FilterPipe,
    AmexioLayout,
    TextFieldComponent,
    AmexioLayoutItem,
    FormComponent,
    CustomComponentvaldiation,
    CheckGroupComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AmexioWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
