import { Component } from '@angular/core';
import { FlightData } from '../models/FlightDataInterface';
import { HttpFlightsService } from '../services/http-flights.service';
import { SearchService } from '../services/search.service';
import { SearchFlightData } from '../models/SearchFlightData';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  searchValues: SearchFlightData[] = [];

  formatArrivalDate(flight: FlightData): string {
    return new Date(flight.arrival * 1000).toLocaleString();
  }

  constructor(
    private http: HttpFlightsService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.get();
    this.searchValues = this.searchService.getSearchValues();
  }

  flights: FlightData[] = [];

  choseFlight() {
    console.log('Chose flight');
  }
  get() {
    this.http.getFlights().subscribe((response) => {
      this.flights = response;
      console.log(this.flights);
      console.log('to są searchValues z importu z services' + this.searchValues);
    });
  }
}
