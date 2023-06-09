import { Injectable } from '@angular/core';
import { Passenger } from '../models/PassengerInterface';

@Injectable({
  providedIn: 'root',
})
export class PassengerService {
 private passengerValues: Passenger[] = [];

  addPassengerValue(passengerData: Passenger) {
    this.passengerValues.push(passengerData);
  }

  getPassengerValues() {
    return this.passengerValues;
  }
}
