import { Component, OnInit } from '@angular/core';
import { Passenger } from '../models/PassengerInterface';
import { NgForm } from '@angular/forms';
import { PassengerService } from '../services/passenger.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  model: Partial<Passenger> = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: 0,
    address: '',
  };
  constructor(private passengerService: PassengerService) {}
  ngOnInit(): void {
    this.model = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: 0,
      address: '',
    };
  }
  send() {
    this.passengerService.addPassengerValue(this.model);
  }
}
