import { Component, OnInit } from '@angular/core';
import { ChosenFlightService } from '../services/chosen-flight.service';
import { FlightData, FlightDataInterface } from '../models/FlightDataInterface';

@Component({
  selector: 'app-chosen-flight',
  templateUrl: './chosen-flight.component.html',
  styleUrls: ['./chosen-flight.component.css'],
})
export class ChosenFlightComponent implements OnInit {
  chosenFlightValues: FlightDataInterface = {} as FlightDataInterface;
  departureDate: string = '';
  arrivalDate: string = '';
  constructor(private chosenFlightService: ChosenFlightService) {}

  ngOnInit(): void {
    this.chosenFlightValues = this.chosenFlightService.getChosenFlightValues();
  }
  formatArrivalDate(chosenFlightValues: FlightDataInterface): string {
    return (this.arrivalDate = new Date(
      chosenFlightValues.arrival * 1000
    ).toLocaleString());
  }
  formatDepartureDate(chosenFlightValues: FlightDataInterface): string {
    return (this.departureDate = new Date(
      chosenFlightValues.departure * 1000
    ).toLocaleString());
  }
}
