import { Injectable } from '@angular/core';
import { FlightData } from '../models/FlightDataInterface';


@Injectable({
  providedIn: 'root',
})
export class ChosenFlightService {
  chosenFlightValues: FlightData[] = [];

  addChosenFlightValue(flightData: FlightData) {
    this.chosenFlightValues.push(flightData);
  }

  getChosenFlightValues() {
    return this.chosenFlightValues;
  }
}
