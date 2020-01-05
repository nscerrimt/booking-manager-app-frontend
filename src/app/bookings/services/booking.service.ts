import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  backendUrl = environment.backendUrl;

  constructor(private httpClient: HttpClient) { }

  createBooking(booking: Booking): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE'
      })
    };

    return this.httpClient.post(`${this.backendUrl}/bookings`, booking, httpOptions);
  }

  getAllBookings(): Observable<Booking[]> {
    console.log('inside getalbookings');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE'
      })
    };
    return this.httpClient.get<Booking[]>(`${this.backendUrl}/bookings`, httpOptions);
  }

  getBookingById(bookingId: string): Observable<Booking> {
    return this.httpClient.get<Booking>(`${this.backendUrl}/bookings/${bookingId}`);
  }

  deleteBooking(bookingId: string): Observable<any> {
    return this.httpClient.delete(`${this.backendUrl}/messaging/bookings/${bookingId}`);
  }

  updateBooking(booking: Booking): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE'
      })
    };

    return this.httpClient.put(`${this.backendUrl}/bookings/${booking.bookingId}`, booking, httpOptions);
  }

}
