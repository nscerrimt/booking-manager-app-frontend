import { TripWayPoint } from './trip-way-point';

export class Booking {
    constructor(
        public passengerName: string,
        public passengerContactNumber: string,
        public pickupTime: string,
        public asap: boolean,
        public noOfPassengers: number,
        public price: number,
        public tripWayPoints: TripWayPoint[],
        public bookingId?: string
    ){}
}
