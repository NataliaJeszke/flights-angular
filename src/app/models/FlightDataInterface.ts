export interface FlightDataInterface {
  departure: number;
  arrival: number;
  flightNumber: string;
  airline: string;
  departureAirport: string;
  arrivalAirport: string;
  departureCity: string;
  arrivalCity: string;
  formatDepratureDate(): string;
  formatArrivalDate(): string;
}

class FlightData implements FlightDataInterface {
  departure: number;
  arrival: number;
  flightNumber: string;
  airline: string;
  departureAirport: string;
  arrivalAirport: string;
  departureCity: string;
  arrivalCity: string;
  constructor(
    departure: number,
    arrival: number,
    flightNumber: string,
    airline: string,
    departureAirport: string,
    arrivalAirport: string,
    departureCity: string,
    arrivalCity: string
  ) {
    this.departure = departure;
    this.arrival = arrival;
    this.flightNumber = flightNumber;
    this.airline = airline;
    this.departureAirport = departureAirport;
    this.arrivalAirport = arrivalAirport;
    this.departureCity = departureCity;
    this.arrivalCity = arrivalCity;
  }
  formatDepratureDate(): string {
    return new Date(this.departure * 1000).toLocaleString();
  }
  formatArrivalDate(): string {
    return new Date(this.arrival * 1000).toLocaleString();
  }
}
//<p> Czas wylotu: {{ flight.departure.scheduled * 1000 | date:'medium' }}</p>
