import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {UsageDetailComponent} from './components/usage-detail/usage-detail.component';
import {ByteUnitPipe} from "./components/pipes/byte-unit.pipe";
import {ChartsModule} from "ng2-charts";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UsageDetailComponent,
    ByteUnitPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
