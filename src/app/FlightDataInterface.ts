export interface FlightDataInterface {
  departure: number;
  arrival: number;
  flightNumber: string;
  airline: string;
  formatDepratureDate(): string;
  formatArrivalDate(): string;
}

class FlightData implements FlightDataInterface {
  departure: number;
  arrival: number;
  flightNumber: string;
  airline: string;
  constructor(
    departure: number,
    arrival: number,
    flightNumber: string,
    airline: string
  ) {
    this.departure = departure;
    this.arrival = arrival;
    this.flightNumber = flightNumber;
    this.airline = airline;
  }
  formatDepratureDate(): string {
    return new Date(this.departure * 1000).toLocaleString();
  }
  formatArrivalDate(): string {
    return new Date(this.arrival * 1000).toLocaleString();
  }
}
//<p> Czas wylotu: {{ flight.departure.scheduled * 1000 | date:'medium' }}</p>
