import { Component, OnInit, OnDestroy } from '@angular/core';
import { FlightData } from '../models/FlightDataInterface';
import { HttpFlightsService } from '../services/http-flights.service';
import { SearchService } from '../services/search.service';
import { SearchFlightData } from '../models/SearchFlightData';
import { ChosenFlightService } from '../services/chosen-flight.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  searchValues: SearchFlightData[] = [];
  flights: FlightData[] = [];
  searchResults: FlightData[] = [];
  departureCity: string = '';
  arrivalCity: string = '';
  flightsWithIds: FlightData[] = [];
  id: string = '';
  loading: any;
  subscription: Subscription | undefined;

  formatArrivalDate(flight: FlightData): string {
    return new Date(flight.arrival * 1000).toLocaleString();
  }
  formatDepartureDate(flight: FlightData): string {
    return new Date(flight.departure * 1000).toLocaleString();
  }

  constructor(
    private http: HttpFlightsService,
    private searchService: SearchService,
    private chosenFlightService: ChosenFlightService
  ) {}

  ngOnInit(): void {
    this.searchValues = this.searchService.getSearchValues();

    this.subscription = this.http.getFlights().subscribe((response) => {
      this.flights = response;
      this.filterFlight();
    });
  }

  // get() {
  //   this.http.getFlights().subscribe((response) => {
  //     this.flights = response;
  //     this.filterFlight();
  //   });
  // }

  filterFlight() {
    this.searchResults = [];

    this.searchValues.forEach((searchValue) => {
      this.departureCity = searchValue.departureInput.toLowerCase().trim();
      this.arrivalCity = searchValue.arrivalInput.toLowerCase().trim();

      const matchingFlights = this.flights.filter((flight) => {
        return (
          flight.departureCity.toLowerCase() === this.departureCity &&
          flight.arrivalCity.toLowerCase() === this.arrivalCity
        );
      });

      const flightsWithIds = matchingFlights.map((flight, index) => {
        return {
          ...flight,
          id: `${this.departureCity}-${this.arrivalCity}-${index}`,
        };
      });

      this.searchResults.push(...flightsWithIds);
    });
  }

  chosenFlight(id: string) {
    const chosenFlight = this.searchResults.find((flight) => flight.id === id);
    if (chosenFlight) {
      this.chosenFlightService.addChosenFlightValue(chosenFlight);
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
