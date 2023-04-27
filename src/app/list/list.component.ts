import { Component } from '@angular/core';
import { FlightDataInterface } from '../models/FlightDataInterface';
import { FLIGHTS } from '../models/Flights';
import { HttpFlightsService } from '../services/http-flights.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  constructor (private http: HttpFlightsService) {}
  searchSetData = [];
  departureInputValue = '';
  arrivalInputValue = '';
  dateInputValue = '0';
  flights: FlightDataInterface[] = FLIGHTS;
  choseFlight() {
    console.log('Chose flight');
  }
  get(){
    this.http.getFlights().subscribe();
}
}
