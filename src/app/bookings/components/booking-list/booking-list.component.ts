import { Component, OnInit } from '@angular/core';
import { Booking } from '../../models/booking';
import { BookingService } from '../../services/booking.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class BookingListComponent implements OnInit {

  public bookings: Booking[];

  constructor(private bookingService: BookingService) { }

  displayedColumns: string[] = ['passenger_name', 'contact_number', 'number_of_passengers', 'pick_up_time', 'price', 'actions'];

  ngOnInit() {
    this.getAllBookings();
  }

  getAllBookings(): void {
    this.bookingService.getAllBookings()
      .subscribe(bookings => {
      this.bookings = bookings;
        console.log(bookings);
      }
      );
  }

  onDeleteBookingClick(booking: Booking): void {
    this.bookingService.deleteBooking(booking.bookingId)
      .subscribe(() => setTimeout(() => this.getAllBookings(), 500))
  }
}

