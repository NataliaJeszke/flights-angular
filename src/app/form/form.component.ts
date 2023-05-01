import { Component, OnInit } from '@angular/core';
import { Passenger } from '../models/PassengerInterface';
import { Router } from '@angular/router';
import { PassengerService } from '../services/passenger.service';
import { ChosenFlightService } from '../services/chosen-flight.service';
import { FlightData } from '../models/FlightDataInterface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  chosenFlightValues: FlightData[] = [];
  model: Partial<Passenger> = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: 48,
    address: '',
    numberOfPassengers: 1,
    carryOnBaggage: false,
    checkedBaggage: false,
  };

  constructor(
    private passengerService: PassengerService,
    private chosenFlightService: ChosenFlightService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.model = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: 48,
      address: '',
      numberOfPassengers: 1,
      carryOnBaggage: false,
      checkedBaggage: false,
    };
    this.chosenFlightValues = this.chosenFlightService.getChosenFlightValues();
    this.getFlightValues();
  }
  send() {
    this.passengerService.addPassengerValue(this.model);
    console.log('to jest passenger z form' + this.model);
    this.router.navigate(['/confirmation']);
  }

  getFlightValues() {
    console.log(
      'to jest chosen flight w komponencie form' + this.chosenFlightValues
    );
  }

  formatArrivalDate(chosenFlightValues: FlightData): string {
    return new Date(chosenFlightValues.arrival * 1000).toLocaleString();
  }
  formatDepartureDate(chosenFlightValues: FlightData): string {
    return new Date(chosenFlightValues.departure * 1000).toLocaleString();
  }
}
