import { Injectable } from '@angular/core';
import { FlightDataInterface } from '../models/FlightDataInterface';

@Injectable({
  providedIn: 'root',
})
export class ChosenFlightService {
  chosenFlightValues: FlightDataInterface = {} as FlightDataInterface;

  addChosenFlightValue(flightData: FlightDataInterface) {
    this.chosenFlightValues = {
      id: flightData.id,
      departure: flightData.departure,
      arrival: flightData.arrival,
      flightNumber: flightData.flightNumber,
      airline: flightData.airline,
      departureAirport: flightData.departureAirport,
      arrivalAirport: flightData.arrivalAirport,
      departureCity: flightData.departureCity,
      arrivalCity: flightData.arrivalCity,
      formatDepartureDate: flightData.formatDepartureDate,
      formatArrivalDate: flightData.formatArrivalDate,
    };
  }

  getChosenFlightValues() {
    return this.chosenFlightValues;
  }
}
