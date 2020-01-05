import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DashboardOptionsComponent } from './dashboard/components/dashboard-options/dashboard-options.component';
import { BookingListComponent } from './bookings/components/booking-list/booking-list.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BookingsPageComponent } from './bookings/components/bookings-page/bookings-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BookingFormComponent } from './bookings/components/booking-form/booking-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardOptionsComponent,
    BookingListComponent,
    BookingsPageComponent,
    HeaderComponent,
    BookingFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
