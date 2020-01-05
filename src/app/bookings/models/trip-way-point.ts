import { Booking } from './booking';

export class TripWayPoint {
    constructor(
        public lastStop: boolean,
        public locality: string,
        public lat: number,
        public lng: number,
        public tripWayPointId?: string,
        public booking?: Booking
    ){}
}
