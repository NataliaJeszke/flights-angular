import { Injectable } from '@angular/core';
import { FlightData } from '../models/FlightDataInterface';


@Injectable({
  providedIn: 'root',
})
export class ChosenFlightService {
  chosenFlightValues: FlightData[] = [];

  addPassengerValue(flightData: FlightData) {
    this.chosenFlightValues.push(flightData);
  }

  getPassengerValues() {
    return this.chosenFlightValues;
  }
}
