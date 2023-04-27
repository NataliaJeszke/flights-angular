import { Component } from '@angular/core';
import { FlightDataInterface } from '../models/FlightDataInterface';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent {
  searchSetData = [];
  departureInputValue = '';
  arrivalInputValue = '';
  dateInputValue = '0';



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

}
