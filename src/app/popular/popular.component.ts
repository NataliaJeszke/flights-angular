import { Component } from '@angular/core';
import { FlightData, FlightDataInterface } from '../models/FlightDataInterface';
import { HttpFlightsService } from '../services/http-flights.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent {

  constructor (private http: HttpFlightsService) {}

  ngOnInit(): void {
    this.get()};

  flights:FlightData[] = [];

  get(){
    this.http.getFlights().subscribe(response => {
      this.flights = response;
      console.log(this.flights);
    }); 
}

get randomFlights() {
  const sortedFlights = this.flights.sort(() => 0.5 - Math.random());
  return sortedFlights.slice(0, 5);
}

formatArrivalDate(flight: FlightData): string {
  return new Date(flight.arrival * 1000).toLocaleString();
}

  choseFlight() {
    console.log('Chose flight');
  }

}
