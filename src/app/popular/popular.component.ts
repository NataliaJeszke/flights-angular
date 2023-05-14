import { Component } from '@angular/core';
import { FlightData } from '../models/FlightDataInterface';
import { HttpFlightsService } from '../services/http-flights.service';
import { ChosenFlightService } from '../services/chosen-flight.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent {
  constructor(
    private http: HttpFlightsService,
    private chosenFlightService: ChosenFlightService
  ) {}

  flights: FlightData[] = [];
  departureCity: string = '';
  arrivalCity: string = '';
  popularResults: FlightData[] = [];
  subscription: Subscription | undefined;

  ngOnInit(): void {
    this.subscription = this.http.getFlights().subscribe((response) => {
      this.flights = response;
      console.log(this.flights);
    });
  }


  get popularFlights() {
    const flightsWithIds = this.flights.map((flight, index) => {
      return {
        ...flight,
        id: `${flight.departureCity}-${flight.arrivalCity}-${flight.departure}-${index}`,
      };
    });
  
    return flightsWithIds.slice(0, 5);
  }

  formatArrivalDate(flight: FlightData): string {
    return new Date(flight.arrival * 1000).toLocaleString();
  }
  formatDepartureDate(flight: FlightData): string {
    return new Date(flight.departure * 1000).toLocaleString();
  }

  chosenFlight(id: string) {
    const chosenFlight = this.popularFlights.find((flight) => flight.id === id);
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
