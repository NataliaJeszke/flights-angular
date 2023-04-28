import { Component } from '@angular/core';
import { FlightData, FlightDataInterface } from '../models/FlightDataInterface';
import { HttpFlightsService } from '../services/http-flights.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  formatArrivalDate(flight: FlightData): string {
    return new Date(flight.arrival * 1000).toLocaleString();
  }

  constructor (private http: HttpFlightsService) {}

  ngOnInit(): void {
    this.get()};

  flights:FlightData[] = [];

  choseFlight() {
    console.log('Chose flight');
  }
  get(){
    this.http.getFlights().subscribe(response => {
      this.flights = response;
      console.log(this.flights);
    });
  
}

}


