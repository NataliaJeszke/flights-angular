import { Component, OnInit } from '@angular/core';
import { Passenger } from '../models/PassengerInterface';
import { PassengerService } from '../services/passenger.service';

@Component({
  selector: 'app-passenger-information',
  templateUrl: './passenger-information.component.html',
  styleUrls: ['./passenger-information.component.css']
})
export class PassengerInformationComponent implements OnInit {
  passengerValues: Passenger[] = [];

  constructor(
    private passengerService: PassengerService,
  ) {}

  ngOnInit(): void {
    this.passengerValues = this.passengerService.getPassengerValues();
  }

}
