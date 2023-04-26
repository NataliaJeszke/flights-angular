import { Component } from '@angular/core';
import { FlightDataInterface } from './FlightDataInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Search for flights';
  departureInputTxt = '';
  arrivalInputTxt = '';

  getDate(): Date {
    return new Date();
  }
  flights: FlightDataInterface[] = [
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
  ];
  choseFlight() {
    console.log('Chose flight');
  }
  searchDeparture(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    this.departureInputTxt = target.value;
    console.log(target.value);
  }
  searchArrival(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    this.arrivalInputTxt = target.value;
    console.log(target.value);
  }
  searchDate(selectedDate: string) {
    console.log('Selected date: ', selectedDate);
  }
  searchFlights() {
    console.log('Search flights:::'+this.departureInputTxt+':::'+this.arrivalInputTxt);
  }
}
