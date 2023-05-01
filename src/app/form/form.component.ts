import { Component, OnInit } from '@angular/core';
import { Passenger } from '../models/PassengerInterface';
import { NgForm } from '@angular/forms';
import { PassengerService } from '../services/passenger.service';
import { ChosenFlightService } from '../services/chosenFlight.service';
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
    phoneNumber: 0,
    address: '',
  };
  constructor(
    private passengerService: PassengerService,
    private chosenFlightService: ChosenFlightService
  ) {}
  ngOnInit(): void {
    this.model = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: 0,
      address: '',
    };
    this.chosenFlightValues = this.chosenFlightService.getChosenFlightValues();
  }
  send() {
    this.passengerService.addPassengerValue(this.model);
  }
}
