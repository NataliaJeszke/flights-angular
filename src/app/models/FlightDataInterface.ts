export interface FlightDataInterface {
  id?: string;
  departure: number;
  arrival: number;
  flightNumber: string;
  airline: string;
  departureAirport: string;
  arrivalAirport: string;
  departureCity: string;
  arrivalCity: string;
  formatDepartureDate?(): string;
  formatArrivalDate?(): string;
}

export class FlightData implements FlightDataInterface {
  id?: string;
  departure: number;
  arrival: number;
  flightNumber: string;
  airline: string;
  departureAirport: string;
  arrivalAirport: string;
  departureCity: string;
  arrivalCity: string;
  constructor(
    id: string,
    departure: number,
    arrival: number,
    flightNumber: string,
    airline: string,
    departureAirport: string,
    arrivalAirport: string,
    departureCity: string,
    arrivalCity: string
  ) {
    this.id = id;
    this.departure = departure;
    this.arrival = arrival;
    this.flightNumber = flightNumber;
    this.airline = airline;
    this.departureAirport = departureAirport;
    this.arrivalAirport = arrivalAirport;
    this.departureCity = departureCity;
    this.arrivalCity = arrivalCity;
  }
  formatDepartureDate?(): string {
    return new Date(this.departure * 1000).toLocaleString();
  }
  formatArrivalDate?(): string {
    return new Date(this.arrival * 1000).toLocaleString();
  }
}
