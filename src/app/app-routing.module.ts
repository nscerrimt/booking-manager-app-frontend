import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardOptionsComponent } from './dashboard/components/dashboard-options/dashboard-options.component';
import { BookingListComponent } from './bookings/components/booking-list/booking-list.component';
import { BookingsPageComponent } from './bookings/components/bookings-page/bookings-page.component';
import { BookingFormComponent } from './bookings/components/booking-form/booking-form.component';


const routes: Routes = [  
  {
    path: 'book-a-cab',
    component: BookingFormComponent
  },
  {
    path: 'bookings',
    component: BookingsPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardOptionsComponent
  },
  {
    path: '',
    component: DashboardOptionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
