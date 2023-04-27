import { FlightDataInterface } from "./FlightDataInterface";

export const FLIGHTS: FlightDataInterface[] = [
    {
        departure: 1640496840,
        arrival: 1640501040,
        flightNumber: '101',
        airline: 'SWA',
        departureAirport: 'JFK',
        arrivalAirport: 'LAX',
        departureCity: 'New York',
        arrivalCity: 'Los Angeles',
        formatDepratureDate() {
          return new Date(this.departure * 1000).toLocaleString();
        },
        formatArrivalDate() {
          return new Date(this.arrival * 1000).toLocaleString();
        },
      },
      {
        departure: 1640496840,
        arrival: 1640501040,
        flightNumber: '101',
        airline: 'SWA',
        departureAirport: 'JFK',
        arrivalAirport: 'LAX',
        departureCity: 'New York',
        arrivalCity: 'Los Angeles',
        formatDepratureDate() {
          return new Date(this.departure * 1000).toLocaleString();
        },
        formatArrivalDate() {
          return new Date(this.arrival * 1000).toLocaleString();
        },
      },
      {
        departure: 1640496840,
        arrival: 1640501040,
        flightNumber: '101',
        airline: 'SWA',
        departureAirport: 'JFK',
        arrivalAirport: 'LAX',
        departureCity: 'New York',
        arrivalCity: 'Los Angeles',
        formatDepratureDate() {
          return new Date(this.departure * 1000).toLocaleString();
        },
        formatArrivalDate() {
          return new Date(this.arrival * 1000).toLocaleString();
        },
      },
]