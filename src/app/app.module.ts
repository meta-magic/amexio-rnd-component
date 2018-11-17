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
    AmexioLayoutItem
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
