import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BookingService } from '../../services/booking.service';
import { Router } from '@angular/router';
import { Booking } from '../../models/booking';
import { TripWayPoint } from '../../models/trip-way-point';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private bookingService: BookingService, private router: Router ) { }
 
  profile: any;
  booking: Booking;
  asapTrue: boolean = false;
  lastStop: boolean = false;

  bookingDetailsForm = this.formBuilder.group({
    passengerName: ['', Validators.required],
    passengerContactNumber: ['', Validators.required],
    pickupTime: ['', Validators.required],
    price: ['', Validators.required],
    noOfPassengers: ['', Validators.required],
    tripWayPointDetailsForm: this.formBuilder.group({
      locality: ['', Validators.required],
      lat: ['', Validators.required],
      lng: ['', Validators.required]
    })
  });

  ngOnInit() {
  }
  toggleLastStop(): void {
    this.lastStop = !this.lastStop;
  }
  onBookingSubmit(): void {
    const passengerName = this.bookingDetailsForm.get('passengerName').value;
    const passengerContactNumber = this.bookingDetailsForm.get('passengerContactNumber').value;
    const pickupTime = this.bookingDetailsForm.get('pickupTime').value + '+01:00';
    const asap = this.asapTrue;
    const price = this.bookingDetailsForm.get('price').value;
    const noOfPassengers = this.bookingDetailsForm.get('noOfPassengers').value;
    const lastStop = this.lastStop;
    const locality = this.bookingDetailsForm.get('tripWayPointDetailsForm').get('locality').value;
    const lat = this.bookingDetailsForm.get('tripWayPointDetailsForm').get('lat').value;
    const lng = this.bookingDetailsForm.get('tripWayPointDetailsForm').get('lng').value;

    const tripWayPoint = new TripWayPoint(lastStop, locality, lat, lng);
    const tripWayPoints: TripWayPoint[] = [tripWayPoint];
    const booking = new Booking(passengerName, passengerContactNumber, pickupTime, asap, noOfPassengers, price, tripWayPoints);

    if (this.bookingDetailsForm.invalid) {
      return;
    }
    this.bookingService.createBooking(booking).subscribe(
      response => 
      { 
        this.router.navigate(['/bookings']);
      }
    );      
  }
}
