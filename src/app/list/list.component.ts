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
  flights: FlightData[] = [];
  searchResults: FlightData[] = [];
  departureCity: string = '';
  arrivalCity: string = '';

  formatArrivalDate(flight: FlightData): string {
    return new Date(flight.arrival * 1000).toLocaleString();
  }
  formatDepartureDate(flight: FlightData): string {
    return new Date(flight.departure * 1000).toLocaleString();
  }

  constructor(
    private http: HttpFlightsService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.searchValues = this.searchService.getSearchValues();
    this.get();
  }

  get() {
    this.http.getFlights().subscribe((response) => {
      this.flights = response;
      this.filterFlight();
    });
  }

  filterFlight() {
    this.searchResults = [];
  
    this.searchValues.forEach((searchValue) => {
      this.departureCity = searchValue.departureInput;
      this.arrivalCity = searchValue.arrivalInput;
  
      const matchingFlights = this.flights.filter((flight) => {
        return flight.departureCity === this.departureCity && flight.arrivalCity === this.arrivalCity;
      });
  
      this.searchResults.push(...matchingFlights);
    });
  }

  chosenFlight() {
    console.log("klik");
  }
}
