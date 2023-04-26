import { Component } from '@angular/core';
import { FlightDataInterface } from './FlightDataInterface';
import { SearchFlightData } from './SearchFlightData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Search for flights';
  searchSetData = [];
  departureInputValue = '';
  arrivalInputValue = '';
  dateInputValue = '0';

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

  searchData(
    departureInput: string,
    arrivalInput: string,
    dateDepartureInput: string
  ) {
    const searchFlightData: SearchFlightData = {
      departureInput,
      arrivalInput,
      dateDepartureInput,
      formatDepartureDateUnix() {
        return new Date(dateDepartureInput).getTime() / 1000;
      },
    };
    console.log(
      departureInput,
      arrivalInput,
      searchFlightData.formatDepartureDateUnix()
    );
  }
}
